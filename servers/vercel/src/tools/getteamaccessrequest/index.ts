export { inputParams } from "./schema/root.js"

export const toolName = `getteamaccessrequest`
export const toolDescription = `Get access request status`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/teams/{teamId}/request/{userId}`
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
  "query": [],
  "header": [],
  "path": [
    "userId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}