import type { OpenMCPServerTool, ParamType } from "./types.js"

export function enclose(str: string) {
  return `<mcp-env-var>${str}</mcp-env-var>`
}

export function getConfigExample(serverName: string, envVarNames: string[]) {
  return JSON.stringify(
    {
      mcpServers: {
        [serverName]: {
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
  keys: OpenMCPServerTool["keys"]
  flatMap: OpenMCPServerTool["flatMap"]
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

export function cleanUrl(url: string) {
  if (!url) {
    return url
  }
  return url.endsWith("/") ? url.slice(0, -1) : url
}

export function stringify({
  value,
  arrayToCSV,
}: {
  value: any
  arrayToCSV: boolean
}): string {
  if (typeof value === "undefined") {
    return ""
  }
  if (typeof value === "object") {
    const isArray = Array.isArray(value)
    if (isArray && arrayToCSV) {
      return value
        .map((x) => stringify({ value: x, arrayToCSV: false }))
        .join(",")
    }
    return JSON.stringify(value)
  }
  return value.toString()
}
