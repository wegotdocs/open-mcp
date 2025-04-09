export { inputParams } from "./schema/root.js"

export const toolName = `reservedips_delete`
export const toolDescription = `Delete a Reserved IP`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/reserved_ips/{reserved_ip}`
export const method = `delete`
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
    "reserved_ip"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}