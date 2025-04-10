export { inputParams } from "./schema/root.js"

export const toolName = `post_refunds`
export const toolDescription = `Create a refund`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/refunds`
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
    "orderId",
    "amount",
    "note"
  ]
}
export const flatMap = {}