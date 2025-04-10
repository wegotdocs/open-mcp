export { inputParams } from "./schema/root.js"

export const toolName = `get_shippings_code`
export const toolDescription = `Get a shipping`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/shippings/{code}`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}