export { inputParams } from "./schema/root.js"

export const toolName = `adddefaultroletousers`
export const toolDescription = `Apply organization default role to all users.`
export const baseUrl = `https://api.sanity.io`
export const path = `/vX/access/organization/{resourceId}/users/roles/default`
export const method = `put`
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
    "resourceId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}