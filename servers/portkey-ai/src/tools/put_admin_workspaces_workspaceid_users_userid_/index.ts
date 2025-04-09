export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_workspaces_workspaceid_users_userid_`
export const toolDescription = `Update workspace member`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/workspaces/{workspaceId}/users/{userId}`
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
    "workspaceId",
    "userId"
  ],
  "cookie": [],
  "body": [
    "role"
  ]
}
export const flatMap = {}