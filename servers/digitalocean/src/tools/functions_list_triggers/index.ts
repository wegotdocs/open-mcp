export { inputParams } from "./schema/root.js"

export const toolName = `functions_list_triggers`
export const toolDescription = `List Triggers`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/functions/namespaces/{namespace_id}/triggers`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "namespace_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}