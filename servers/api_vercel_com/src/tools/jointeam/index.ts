export { inputParams } from "./schema/root.js"

export const toolName = `jointeam`
export const toolDescription = `Join a team`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/teams/{teamId}/members/teams/join`
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
    "inviteCode"
  ]
}
export const flatMap = {}