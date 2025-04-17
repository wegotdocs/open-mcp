export { inputParams } from "./schema/root.js"

export const toolName = `post_discounts_automatic`
export const toolDescription = `Create an automatic discount`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/discounts/automatic`
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
  "path": [],
  "cookie": [],
  "body": [
    "title",
    "scope",
    "productIds",
    "categoryIds",
    "type",
    "amountOff",
    "percentOff",
    "currency",
    "requirement",
    "amountMinimum",
    "quantityMinimum",
    "startsAt",
    "expiresAt"
  ]
}
export const flatMap = {}