import type { MCPServerModule, ParamType } from "@wegotdocs/shared"
import { SERVER_NAME } from "./constants.js"

export function enclose(str: string) {
  return `<mcp-env-var>${str}</mcp-env-var>`
}

export function getConfigExample(envVarNames: string[]) {
  return JSON.stringify(
    {
      mcpServers: {
        [SERVER_NAME]: {
          env: envVarNames.reduce((acc, envVarName) => {
            acc[envVarName] = "..."
            return acc
          }, {} as Record<string, string>),
          command: "...",
        },
      },
    },
    null,
    2
  )
}

interface FlatObj {
  [key: string]: unknown
}

type RequestObj = Record<ParamType, Record<string, unknown>>

export function unflatten({
  flat,
  keys,
  flatMap,
}: {
  flat: FlatObj
  keys: MCPServerModule["keys"]
  flatMap: MCPServerModule["flatMap"]
}): RequestObj {
  return Object.entries(keys).reduce((acc, [paramType, paramTypeKeys]) => {
    acc[paramType as ParamType] = paramTypeKeys.reduce((paramObj, flatKey) => {
      const originalKey = flatMap[flatKey] || flatKey
      if (flatKey in flat) {
        paramObj[originalKey] = flat[flatKey]
      }
      return paramObj
    }, {} as Record<string, unknown>)
    return acc
  }, {} as RequestObj)
}
