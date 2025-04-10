export { inputParams } from "./schema/root.js"

export const toolName = `getrequests`
export const toolDescription = `List all requests for given project/organization.`
export const baseUrl = `https://api.sanity.io`
export const path = `/v2024-07-01/access/{resourceType}/{resourceId}/requests`
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
    "includeChildren"
  ],
  "header": [],
  "path": [
    "resourceType",
    "resourceId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}