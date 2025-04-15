export { inputParams } from "./schema/root.js"

export const toolName = `create_accounts`
export const toolDescription = `Create Accounts`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/admin/accounts`
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
  "path": [],
  "cookie": [],
  "body": [
    "users",
    "organizations",
    "workspaces",
    "projects",
    "organization_memberships",
    "workspace_memberships",
    "project_memberships"
  ]
}
export const flatMap = {}