export { inputParams } from "./schema/root.js"

export const toolName = `post_shippings`
export const toolDescription = `Create a shipping code`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/shippings`
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
    "company",
    "type"
  ]
}
export const flatMap = {}