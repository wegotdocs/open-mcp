export { inputParams } from "./schema/root.js"

export const toolName = `update_workspace`
export const toolDescription = `Update Workspace`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/organizations/{org_id}/workspaces/{workspace_id}`
export const method = `put`
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
    "name",
    "description",
    "updated_at"
  ]
}
export const flatMap = {}