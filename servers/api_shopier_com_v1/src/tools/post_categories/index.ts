export { inputParams } from "./schema/root.js"

export const toolName = `post_categories`
export const toolDescription = `Create a product category`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/categories`
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
    "placement"
  ]
}
export const flatMap = {}