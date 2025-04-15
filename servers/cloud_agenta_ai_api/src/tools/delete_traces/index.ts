export { inputParams } from "./schema/root.js"

export const toolName = `delete_traces`
export const toolDescription = `Delete traces`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/observability/v1/traces`
export const method = `delete`
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
    "node_id",
    "node_ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}