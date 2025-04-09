export { inputParams } from "./schema/root.js"

export const toolName = `put_api_keys_id_`
export const toolDescription = `Update Api Keys`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/api-keys/{id}`
export const method = `put`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": [
    "name",
    "description",
    "rate_limits",
    "usage_limits",
    "scopes",
    "defaults",
    "alert_emails"
  ]
}
export const flatMap = {}