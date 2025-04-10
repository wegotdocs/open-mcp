export { inputParams } from "./schema/root.js"

export const toolName = `get_categories`
export const toolDescription = `List all product categories`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/categories`
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