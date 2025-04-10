export { inputParams } from "./schema/root.js"

export const toolName = `post_discounts_codes`
export const toolDescription = `Create a discount code`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/discounts/codes`
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
    "code",
    "type",
    "amountOff",
    "percentOff",
    "amountMinimum",
    "currency",
    "numAvailable",
    "expiresAt"
  ]
}
export const flatMap = {}