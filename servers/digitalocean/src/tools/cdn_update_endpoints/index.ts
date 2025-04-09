export { inputParams } from "./schema/root.js"

export const toolName = `cdn_update_endpoints`
export const toolDescription = `Update a CDN Endpoint`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/cdn/endpoints/{cdn_id}`
export const method = `put`
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
    "cdn_id"
  ],
  "cookie": [],
  "body": [
    "ttl",
    "certificate_id",
    "custom_domain"
  ]
}
export const flatMap = {}