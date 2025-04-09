export { inputParams } from "./schema/root.js"

export const toolName = `projects_list_resources`
export const toolDescription = `List Project Resources`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/projects/{project_id}/resources`
export const method = `get`
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
  "query": [
    "per_page",
    "page"
  ],
  "header": [],
  "path": [
    "project_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}