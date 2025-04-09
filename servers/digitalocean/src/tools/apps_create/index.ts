export { inputParams } from "./schema/root.js"

export const toolName = `apps_create`
export const toolDescription = `Create a New App`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps`
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
  "header": [
    "Accept",
    "Content-Type"
  ],
  "path": [],
  "cookie": [],
  "body": [
    "spec",
    "project_id"
  ]
}
export const flatMap = {}