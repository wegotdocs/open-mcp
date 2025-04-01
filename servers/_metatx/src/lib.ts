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

type ParamType = "query" | "header" | "path" | "cookie" | "body"

type RequestSchemaFlatKeyPrefix = "q" | "h" | "p" | "c" | "b"

type RequestSchemaFlatKey = `${RequestSchemaFlatKeyPrefix}_${string}`

const PREFIX_MAP: Record<RequestSchemaFlatKeyPrefix, ParamType> = {
  q: "query",
  h: "header",
  p: "path",
  c: "cookie",
  b: "body",
}

interface FlatObj {
  [key: RequestSchemaFlatKey]: unknown
}

type RequestObj = Record<ParamType, Record<string, unknown>>

export function unflatten(obj: FlatObj): RequestObj {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const prefix = key[0] as RequestSchemaFlatKeyPrefix
    const propertyType = PREFIX_MAP[prefix]
    if (!propertyType) return acc
    if (!acc[propertyType]) {
      acc[propertyType] = {}
    }
    const originalKey = key.slice(2)
    acc[propertyType]![originalKey] = value
    return acc
  }, {} as RequestObj)
}
