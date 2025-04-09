export { inputParams } from "./schema/root.js"

export const toolName = `projects_assign_resources`
export const toolDescription = `Assign Resources to a Project`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/projects/{project_id}/resources`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "project_id"
  ],
  "cookie": [],
  "body": [
    "resources"
  ]
}
export const flatMap = {}