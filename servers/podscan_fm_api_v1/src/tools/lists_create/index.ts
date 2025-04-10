export { inputParams } from "./schema/root.js"

export const toolName = `lists_create`
export const toolDescription = `Create a new list`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/teams/{team}/lists`
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
    "team"
  ],
  "cookie": [],
  "body": [
    "name",
    "type",
    "description",
    "is_private",
    "webhook_url",
    "webhook_active",
    "item"
  ]
}
export const flatMap = {}