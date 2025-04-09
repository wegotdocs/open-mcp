export { inputParams } from "./schema/root.js"

export const toolName = `post_admin_workspaces_workspaceid_users`
export const toolDescription = `Add workspace member`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/workspaces/{workspaceId}/users`
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
    "workspaceId"
  ],
  "cookie": [],
  "body": [
    "users"
  ]
}
export const flatMap = {}