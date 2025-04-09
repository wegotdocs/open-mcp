export { inputParams } from "./schema/root.js"

export const toolName = `createproject`
export const toolDescription = `Creates a Project.`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/projects`
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
  "path": [],
  "cookie": [],
  "body": [
    "name"
  ]
}
export const flatMap = {}