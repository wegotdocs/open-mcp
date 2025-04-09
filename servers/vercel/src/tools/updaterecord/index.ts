export { inputParams } from "./schema/root.js"

export const toolName = `updaterecord`
export const toolDescription = `Update an existing DNS record`
export const baseUrl = `https://api.vercel.com`
export const path = `/v1/domains/records/{recordId}`
export const method = `patch`
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
  "path": [
    "recordId"
  ],
  "cookie": [],
  "body": [
    "additionalProperties",
    "name",
    "value",
    "type",
    "ttl",
    "mxPriority",
    "srv",
    "https",
    "comment"
  ]
}
export const flatMap = {}