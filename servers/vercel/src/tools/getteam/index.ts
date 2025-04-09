export { inputParams } from "./schema/root.js"

export const toolName = `getteam`
export const toolDescription = `Get a Team`
export const baseUrl = `https://api.vercel.com`
export const path = `/v2/teams/{teamId}`
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
    "slug"
  ],
  "header": [],
  "path": [
    "teamId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}