export { inputParams } from "./schema/root.js"

export const toolName = `dropletactions_get`
export const toolDescription = `Retrieve a Droplet Action`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/droplets/{droplet_id}/actions/{action_id}`
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
    "droplet_id",
    "action_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}