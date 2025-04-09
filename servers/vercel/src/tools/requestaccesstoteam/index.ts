export { inputParams } from "./schema/root.js"

export const toolName = `requestaccesstoteam`
export const toolDescription = `Request access to a team`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/teams/{teamId}/request`
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
    "joinedFrom"
  ]
}
export const flatMap = {}