export { inputParams } from "./schema/root.js"

export const toolName = `createauthtoken`
export const toolDescription = `Create an Auth Token`
export const baseUrl = `https://api.vercel.com`
export const path = `/v3/user/tokens`
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
  "path": [],
  "cookie": [],
  "body": [
    "name",
    "expiresAt"
  ]
}
export const flatMap = {}