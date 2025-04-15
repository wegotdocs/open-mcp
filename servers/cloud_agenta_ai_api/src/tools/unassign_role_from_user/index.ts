export { inputParams } from "./schema/root.js"

export const toolName = `unassign_role_from_user`
export const toolDescription = `Unassign Role From User`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/workspaces/{workspace_id}/roles`
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
    "email",
    "org_id",
    "role"
  ],
  "header": [],
  "path": [
    "workspace_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}