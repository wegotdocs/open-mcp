export { inputParams } from "./schema/root.js"

export const toolName = `categories_index`
export const toolDescription = `List all categories`
export const baseUrl = `https://podscan.fm/api/v1`
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
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}