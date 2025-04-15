export { inputParams } from "./schema/root.js"

export const toolName = `create_app`
export const toolDescription = `Create App`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/apps`
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
    "app_name",
    "template_key",
    "project_id",
    "workspace_id",
    "organization_id"
  ]
}
export const flatMap = {}