export { inputParams } from "./schema/root.js"

export const toolName = `declinerequest`
export const toolDescription = `Decline request`
export const baseUrl = `https://api.sanity.io`
export const path = `/v2024-07-01/access/{resourceType}/{resourceId}/requests/{requestId}/decline`
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
    "resourceType",
    "resourceId",
    "requestId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}