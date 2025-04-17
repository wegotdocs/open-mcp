export { inputParams } from "./schema/root.js"

export const toolName = `delete_categories_id`
export const toolDescription = `Delete a product category`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/categories/{id}`
export const method = `delete`
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
  "body": []
}
export const flatMap = {}