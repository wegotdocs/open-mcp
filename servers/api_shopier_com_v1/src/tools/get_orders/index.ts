export { inputParams } from "./schema/root.js"

export const toolName = `get_orders`
export const toolDescription = `List all orders`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/orders`
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
    "dateStart",
    "dateEnd",
    "fulfillmentStatus",
    "refundType",
    "customerEmail",
    "customerPhone",
    "productId",
    "limit",
    "page",
    "sort"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}