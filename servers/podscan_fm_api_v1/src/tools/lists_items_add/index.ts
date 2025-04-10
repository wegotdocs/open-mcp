export { inputParams } from "./schema/root.js"

export const toolName = `lists_items_add`
export const toolDescription = `Add item to list`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/teams/{team}/lists/{list}/items`
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
  "path": [
    "team",
    "list"
  ],
  "cookie": [],
  "body": [
    "type",
    "id"
  ]
}
export const flatMap = {}