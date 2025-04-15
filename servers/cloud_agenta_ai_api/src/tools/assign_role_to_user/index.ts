export { inputParams } from "./schema/root.js"

export const toolName = `assign_role_to_user`
export const toolDescription = `Assign Role To User`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/workspaces/{workspace_id}/roles`
export const method = `post`
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
  "query": [],
  "header": [],
  "path": [
    "workspace_id"
  ],
  "cookie": [],
  "body": [
    "email",
    "organization_id",
    "role"
  ]
}
export const flatMap = {}