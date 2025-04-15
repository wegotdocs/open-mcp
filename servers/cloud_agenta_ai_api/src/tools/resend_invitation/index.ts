export { inputParams } from "./schema/root.js"

export const toolName = `resend_invitation`
export const toolDescription = `Resend User Invitation To Organization`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/organizations/{org_id}/workspaces/{workspace_id}/invite/resend`
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
    "org_id",
    "workspace_id"
  ],
  "cookie": [],
  "body": [
    "email"
  ]
}
export const flatMap = {}