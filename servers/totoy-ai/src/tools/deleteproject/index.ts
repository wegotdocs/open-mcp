export { inputParams } from "./schema/root.js"

export const toolName = `deleteproject`
export const toolDescription = `Deletes a Project and all its associated resources.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/projects/{project_id}`
export const method = `delete`
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
  "body": []
}
export const flatMap = {}