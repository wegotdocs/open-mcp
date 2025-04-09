export { inputParams } from "./schema/root.js"

export const toolName = `post_api_keys_type_sub_type_`
export const toolDescription = `Create Api Keys`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/api-keys/{type}/{sub-type}`
export const method = `post`
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
    "type",
    "sub-type"
  ],
  "cookie": [],
  "body": [
    "name",
    "description",
    "workspace_id",
    "user_id",
    "rate_limits",
    "usage_limits",
    "scopes",
    "defaults",
    "alert_emails"
  ]
}
export const flatMap = {}