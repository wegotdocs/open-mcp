export { inputParams } from "./schema/root.js"

export const toolName = `createaccessgroupproject`
export const toolDescription = `Create an access group project`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/access-groups/{accessGroupIdOrName}/projects`
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
    "accessGroupIdOrName"
  ],
  "cookie": [],
  "body": [
    "projectId",
    "role"
  ]
}
export const flatMap = {}