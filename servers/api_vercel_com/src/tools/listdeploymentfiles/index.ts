export { inputParams } from "./schema/root.js"

export const toolName = `listdeploymentfiles`
export const toolDescription = `List Deployment Files`
export const baseUrl = `https://api.vercel.com`
export const path = `/v6/deployments/{id}/files`
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
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}