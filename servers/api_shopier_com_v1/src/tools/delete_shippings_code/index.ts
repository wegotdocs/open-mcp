export { inputParams } from "./schema/root.js"

export const toolName = `delete_shippings_code`
export const toolDescription = `Delete a shipping code`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/shippings/{code}`
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