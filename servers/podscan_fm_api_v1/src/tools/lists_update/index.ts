export { inputParams } from "./schema/root.js"

export const toolName = `lists_update`
export const toolDescription = `Update a list`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/teams/{team}/lists/{list}`
export const method = `put`
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
    "name",
    "description",
    "is_private",
    "webhook_url",
    "webhook_active"
  ]
}
export const flatMap = {}