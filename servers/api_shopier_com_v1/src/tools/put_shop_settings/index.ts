export { inputParams } from "./schema/root.js"

export const toolName = `put_shop_settings`
export const toolDescription = `Update the shop’s settings`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/shop/settings`
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
    "title",
    "slogan",
    "announcement",
    "confirmation",
    "email",
    "phone",
    "access",
    "cart",
    "mobileView",
    "filter",
    "stockOutProducts",
    "language",
    "vacation"
  ]
}
export const flatMap = {}