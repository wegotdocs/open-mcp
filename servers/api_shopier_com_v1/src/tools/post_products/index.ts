export { inputParams } from "./schema/root.js"

export const toolName = `post_products`
export const toolDescription = `Create a product`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/products`
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
    "description",
    "type",
    "media",
    "priceData",
    "stockQuantity",
    "shippingPayer",
    "categories",
    "variants",
    "options",
    "singleOption",
    "customListing",
    "customNote",
    "placementScore",
    "dispatchDuration"
  ]
}
export const flatMap = {}