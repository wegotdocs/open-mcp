export { inputParams } from "./schema/root.js"

export const toolName = `invite_user_to_workspace`
export const toolDescription = `Invite User To Organization`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/organizations/{org_id}/workspaces/{workspace_id}/invite`
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
  "body": []
}
export const flatMap = {}