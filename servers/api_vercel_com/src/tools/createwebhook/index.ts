export { inputParams } from "./schema/root.js"

export const toolName = `createwebhook`
export const toolDescription = `Creates a webhook`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/webhooks`
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
    "url",
    "events",
    "projectIds"
  ]
}
export const flatMap = {}