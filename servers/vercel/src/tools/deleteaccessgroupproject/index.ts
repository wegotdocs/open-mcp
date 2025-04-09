export { inputParams } from "./schema/root.js"

export const toolName = `deleteaccessgroupproject`
export const toolDescription = `Delete an access group project`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}`
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
  "query": [
    "teamId",
    "slug"
  ],
  "header": [],
  "path": [
    "accessGroupIdOrName",
    "projectId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}