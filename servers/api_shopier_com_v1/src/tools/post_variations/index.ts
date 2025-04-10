export { inputParams } from "./schema/root.js"

export const toolName = `post_variations`
export const toolDescription = `Create a product variation`
export const baseUrl = `https://api.shopier.com/v1`
export const path = `/variations`
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
    "title"
  ]
}
export const flatMap = {}