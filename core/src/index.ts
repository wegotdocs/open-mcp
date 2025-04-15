import { z } from "zod"
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import {
  cleanUrl,
  enclose,
  getConfigExample,
  unflatten,
  stringify,
} from "./lib.js"
import type { OpenMCPServerTool } from "./types.js"

export type { OpenMCPServerTool }

async function registerToolFromOperation(
  server: McpServer,
  operation: OpenMCPServerTool
) {
  const {
    baseUrl,
    path: opPath,
    method,
    toolName,
    toolDescription,
    inputParams,
    security,
    keys,
    flatMap,
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

  server.tool(toolName, toolDescription, inputParams, async (flat) => {
    const params = unflatten({ flat, keys, flatMap })

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
      const sampleConfig = getConfigExample(
        "{server-name}",
        security.map((x) => x.envVarName)
      )
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
        stringify({ value, arrayToCSV: true })
      )
    }

    const url = new URL(`${customBaseUrl}${opPathResolved}`)
    for (const [key, value] of Object.entries({
      ...securityQueryObj,
      ...(params.query || {}),
    })) {
      url.searchParams.set(key, stringify({ value, arrayToCSV: true }))
    }

    const body =
      params.body && Object.keys(params.body).length > 0
        ? JSON.stringify(params.body)
        : undefined

    const headers = {
      ...(body ? { "Content-Type": "application/json" } : {}),
      ...(params.header || {}),
      ...securityHeadersObj,
    } as Record<string, string>

    const response = await fetch(url, {
      method,
      headers,
      body,
    })
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

export async function registerTools(
  server: McpServer,
  tools: OpenMCPServerTool[]
) {
  server.tool(
    "expandSchema",
    "Expand the input schema for a tool before calling the tool",
    {
      toolName: z.string(), // could make this enum?
      jsonPointers: z
        .array(
          z
            .string()
            .startsWith("/")
            .describe(
              "The pointer to the JSON schema object which needs expanding"
            )
        )
        .describe("A list of JSON pointers"),
    },
    async ({ toolName, jsonPointers }) => {
      const promises = jsonPointers.map((jsonPointer) =>
        import(`./tools/${toolName}/schema-json${jsonPointer}.json`, {
          with: { type: "json" },
        })
          .then((schema) => {
            return {
              type: "text" as "text",
              text: JSON.stringify(
                {
                  jsonPointer,
                  schema,
                },
                null,
                2
              ),
            }
          })
          .catch(() => {
            return {
              type: "text" as "text",
              text: JSON.stringify(
                {
                  jsonPointer,
                  schema: null,
                  error:
                    "Provided tool and JSON pointer do not match. Try again with a different tool/pointer combination.",
                },
                null,
                2
              ),
            }
          })
      )
      const content = await Promise.all(promises)
      return { content }
    }
  )

  for (const tool of tools) {
    await registerToolFromOperation(server, tool)
  }
}
