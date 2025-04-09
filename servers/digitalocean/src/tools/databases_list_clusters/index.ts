export { inputParams } from "./schema/root.js"

export const toolName = `databases_list_clusters`
export const toolDescription = `List All Database Clusters`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases`
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
    "tag_name"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}