export { inputParams } from "./schema/root.js"

export const toolName = `functions_update_trigger`
export const toolDescription = `Update Trigger`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/functions/namespaces/{namespace_id}/triggers/{trigger_name}`
export const method = `put`
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
    "namespace_id",
    "trigger_name"
  ],
  "cookie": [],
  "body": [
    "is_enabled",
    "scheduled_details"
  ]
}
export const flatMap = {}