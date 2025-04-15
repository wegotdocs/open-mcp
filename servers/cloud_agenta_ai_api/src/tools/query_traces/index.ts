export { inputParams } from "./schema/root.js"

export const toolName = `query_traces`
export const toolDescription = `Query traces, with optional grouping, windowing, filtering, and pagination.`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/observability/v1/traces`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]
export const keys = {
  "query": [
    "format",
    "focus",
    "oldest",
    "newest",
    "filtering",
    "page",
    "size",
    "next",
    "stop"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}