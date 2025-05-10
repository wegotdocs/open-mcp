export { inputParams } from "./schema/root.js"

export const toolName = `put_discounts_codes_id`
export const toolDescription = `Update a discount code`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/discounts/codes/{id}`
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
    "numAvailable",
    "expiresAt"
  ]
}
export const flatMap = {}