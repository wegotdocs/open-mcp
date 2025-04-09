export { inputParams } from "./schema/root.js"

export const toolName = `createsource`
export const toolDescription = `Creates a Document or Text Source`
export const baseUrl = `https://api.totoy.ai/v1`
export const path = `/sources`
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
    "text_content",
    "title",
    "backlink",
    "valid_from",
    "valid_until",
    "project_id",
    "custom_metadata"
  ]
}
export const flatMap = {}