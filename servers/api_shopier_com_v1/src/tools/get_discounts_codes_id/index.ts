export { inputParams } from "./schema/root.js"

export const toolName = `get_discounts_codes_id`
export const toolDescription = `Get a discount code`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/discounts/codes/{id}`
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