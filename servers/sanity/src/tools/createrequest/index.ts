export { inputParams } from "./schema/root.js"

export const toolName = `createrequest`
export const toolDescription = `Create a new Request`
export const baseUrl = `https://api.sanity.io`
export const path = `/v2024-07-01/access/{resourceType}/{resourceId}/requests`
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
  "path": [
    "resourceType",
    "resourceId"
  ],
  "cookie": [],
  "body": [
    "note",
    "requestUrl",
    "requestedRole",
    "type"
  ]
}
export const flatMap = {}