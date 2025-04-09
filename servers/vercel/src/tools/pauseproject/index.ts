export { inputParams } from "./schema/root.js"

export const toolName = `pauseproject`
export const toolDescription = `Pause a project`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/projects/{projectId}/pause`
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
    "projectId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}