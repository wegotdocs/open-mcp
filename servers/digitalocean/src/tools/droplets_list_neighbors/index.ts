export { inputParams } from "./schema/root.js"

export const toolName = `droplets_list_neighbors`
export const toolDescription = `List Neighbors for a Droplet`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/droplets/{droplet_id}/neighbors`
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
    "droplet_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}