export { inputParams } from "./schema/root.js"

export const toolName = `parameters_products_id_`
export const toolDescription = ``
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/products/{id}`
export const method = `parameters`
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