export { inputParams } from "./schema/root.js"

export const toolName = `volumeactions_get`
export const toolDescription = `Retrieve an Existing Volume Action`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/volumes/{volume_id}/actions/{action_id}`
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
    "per_page",
    "page"
  ],
  "header": [],
  "path": [
    "volume_id",
    "action_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}