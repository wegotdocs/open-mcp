export { inputParams } from "./schema/root.js"

export const toolName = `getdeploymentfilecontents`
export const toolDescription = `Get Deployment File Contents`
export const baseUrl = `https://api.vercel.com`
export const path = `/v7/deployments/{id}/files/{fileId}`
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
    "path",
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "id",
    "fileId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}