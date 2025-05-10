export { inputParams } from "./schema/root.js"

export const toolName = `get_shop_owner`
export const toolDescription = `Get the shop’s owner information`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/shop/owner`
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