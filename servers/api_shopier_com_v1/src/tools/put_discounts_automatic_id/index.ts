export { inputParams } from "./schema/root.js"

export const toolName = `put_discounts_automatic_id`
export const toolDescription = `Update an automatic discount`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/discounts/automatic/{id}`
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
  "path": [],
  "cookie": [],
  "body": [
    "startsAt",
    "expiresAt"
  ]
}
export const flatMap = {}