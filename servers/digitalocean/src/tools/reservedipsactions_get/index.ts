export { inputParams } from "./schema/root.js"

export const toolName = `reservedipsactions_get`
export const toolDescription = `Retrieve an Existing Reserved IP Action`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/reserved_ips/{reserved_ip}/actions/{action_id}`
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
    "reserved_ip",
    "action_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}