export { inputParams } from "./schema/root.js"

export const toolName = `get_admin_users`
export const toolDescription = `Get users`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/users`
export const method = `get`
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
  "query": [
    "pageSize",
    "currentPage",
    "role",
    "email"
  ],
  "header": [
    "x-portkey-api-key"
  ],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}