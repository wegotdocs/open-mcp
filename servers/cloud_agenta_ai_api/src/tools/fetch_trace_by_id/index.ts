export { inputParams } from "./schema/root.js"

export const toolName = `fetch_trace_by_id`
export const toolDescription = `Fetch trace by ID.`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/observability/v1/traces/{trace_id}`
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
    "format"
  ],
  "header": [],
  "path": [
    "trace_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}