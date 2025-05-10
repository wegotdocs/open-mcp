export { inputParams } from "./schema/root.js"

export const toolName = `post_selections`
export const toolDescription = `Create a product selection`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/selections`
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
    "variationId",
    "title"
  ]
}
export const flatMap = {}