export { inputParams } from "./schema/root.js"

export const toolName = `entities_search`
export const toolDescription = `Search entities`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/entities/search`
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
    "query",
    "type",
    "role",
    "min_appearances",
    "search_fields",
    "order_by",
    "order_dir"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}