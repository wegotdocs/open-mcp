export { inputParams } from "./schema/root.js"

export const toolName = `images_list`
export const toolDescription = `List All Images`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/images`
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
    "type",
    "private",
    "tag_name",
    "per_page",
    "page"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}