export { inputParams } from "./schema/root.js"

export const toolName = `readaccessgroupproject`
export const toolDescription = `Reads an access group project`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/access-groups/{accessGroupIdOrName}/projects/{projectId}`
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
    "accessGroupIdOrName",
    "projectId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}