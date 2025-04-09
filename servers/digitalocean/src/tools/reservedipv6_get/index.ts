export { inputParams } from "./schema/root.js"

export const toolName = `reservedipv6_get`
export const toolDescription = `[Public Preview] Retrieve an Existing Reserved IPv6`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/reserved_ipv6/{reserved_ipv6}`
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
    "reserved_ipv6"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}