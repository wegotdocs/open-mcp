import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"
import { enclose, getConfigExample } from "./lib.js"
import {
  SERVER_NAME,
  SERVER_VERSION,
  OPERATION_FILES_RELATIVE,
} from "./constants.js"
import type { MCPServerModule } from "@wegotdocs/shared"

const server = new McpServer({
  name: SERVER_NAME,
  version: SERVER_VERSION,
})

function cleanUrl(url: string) {
  if (!url) {
    return url
  }
  return url.endsWith("/") ? url.slice(0, -1) : url
}
async function registerToolFromOperation(operationFileRelativePath: string) {
  const operation = (await import(operationFileRelativePath)) as MCPServerModule

  const requiredKeys: (keyof typeof operation)[] = [
    "path",
    "method",
    "toolName",
    "inputParams",
  ]
  for (const key of requiredKeys) {
    if (!operation[key]) {
      throw new Error(
        `Parameter '${key}' in '${operationFileRelativePath}' is not well-defined`
      )
    }
  }

  const {
    baseUrl,
    path: opPath,
    method,
    toolName,
    toolDescription,
    inputParams,
    security,
  } = operation

  const customBaseUrl = cleanUrl(process.env.OPEN_MCP_BASE_URL || baseUrl)

  if (
    !customBaseUrl.startsWith("http://") &&
    !customBaseUrl.startsWith("https://")
  ) {
    throw new Error(
      `Base URL must start with 'http://' or 'https://', received '${customBaseUrl}'`
    )
  }

  if (!opPath.startsWith("/")) {
    throw new Error("path must start with slash")
  }

  server.tool(toolName, toolDescription, inputParams, async (params) => {
    const securityHeadersObj: Record<string, string> = {}
    const securityQueryObj: Record<string, string> = {}
    for (const item of security) {
      const ENV_VAR = process.env[item.envVarName]
      if (ENV_VAR) {
        const value = item.value.replace(enclose(item.envVarName), ENV_VAR)
        if (item.in === "header") {
          securityHeadersObj[item.key] = value
        } else if (item.in === "query") {
          securityQueryObj[item.key] = value
        }
      }
    }

    if (
      Object.keys(securityHeadersObj).length === 0 &&
      Object.keys(securityQueryObj).length === 0 &&
      security.length > 0
    ) {
      const envVarsString = security
        .map((x) => `\`${x.envVarName}\``)
        .join(", ")
      const sampleConfig = getConfigExample(security.map((x) => x.envVarName))
      return {
        content: [
          {
            type: "text",
            text: `Must provide at least one of the following environment variables: ${envVarsString}.`,
          },
          {
            type: "text",
            text: `For example, in your MCP client config file:\n\n${sampleConfig}`,
          },
        ],
      }
    }

    let opPathResolved = opPath
    for (const [key, value] of Object.entries(params.path || {})) {
      if (typeof value === "undefined") {
        continue
      }
      opPathResolved = opPathResolved.replaceAll(
        `{${key}}`,
        typeof value === "object" ? JSON.stringify(value) : value.toString()
      )
    }

    const url = new URL(`${customBaseUrl}${opPathResolved}`)
    for (const [key, value] of Object.entries({
      ...securityQueryObj,
      ...(params.query || {}),
    })) {
      url.searchParams.set(
        key,
        typeof value === "undefined"
          ? ""
          : typeof value === "object"
          ? JSON.stringify(value)
          : value.toString()
      )
    }

    const headers = {
      ...(params.header || {}),
      ...securityHeadersObj,
    } as Record<string, string>

    const response = await fetch(url, { method, headers })
    const text = await response.text()

    return {
      content: [
        {
          type: "text",
          text: `Response from ${url.toString()}`,
        },
        {
          type: "text",
          text,
        },
      ],
    }
  })
}

export async function runServer() {
  try {
    for (const file of OPERATION_FILES_RELATIVE) {
      await registerToolFromOperation(file)
    }

    const transport = new StdioServerTransport()
    await server.connect(transport)
    console.error("MCP Server running on stdio")
  } catch (error) {
    console.error("Error during initialization:", error)
    process.exit(1)
  }
}
