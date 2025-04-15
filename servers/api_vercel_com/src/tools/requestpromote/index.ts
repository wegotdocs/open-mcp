export { inputParams } from "./schema/root.js"

export const toolName = `requestpromote`
export const toolDescription = `Points all production domains for a project to the given deploy`
export const baseUrl = `https://api.vercel.com`
export const path = `/v10/projects/{projectId}/promote/{deploymentId}`
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
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "projectId",
    "deploymentId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}