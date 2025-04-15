export { inputParams } from "./schema/root.js"

export const toolName = `remove_user_from_workspace`
export const toolDescription = `Remove User From Workspace`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/workspaces/{workspace_id}/users`
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
    "email"
  ],
  "header": [],
  "path": [
    "workspace_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}