export { inputParams } from "./schema/root.js"

export const toolName = `put_orders_id`
export const toolDescription = `Update an order`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/orders/{id}`
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
    "fulfillments",
    "shippingInfo"
  ]
}
export const flatMap = {}