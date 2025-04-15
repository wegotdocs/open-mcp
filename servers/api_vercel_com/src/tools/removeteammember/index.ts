export { inputParams } from "./schema/root.js"

export const toolName = `removeteammember`
export const toolDescription = `Remove a Team Member`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/teams/{teamId}/members/{uid}`
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
    "newDefaultTeamId"
  ],
  "header": [],
  "path": [
    "uid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}