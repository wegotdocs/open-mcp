export { inputParams } from "./schema/root.js"

export const toolName = `tags_get`
export const toolDescription = `Retrieve a Tag`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/tags/{tag_id}`
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
  "path": [
    "tag_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}