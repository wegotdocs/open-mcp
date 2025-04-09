export { inputParams } from "./schema/root.js"

export const toolName = `spaceskey_patch`
export const toolDescription = `Update Spaces Access Keys`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/spaces/keys/{access_key}`
export const method = `patch`
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
    "access_key"
  ],
  "cookie": [],
  "body": [
    "name",
    "grants",
    "b_access_key",
    "created_at"
  ]
}
export const flatMap = {
  "b_access_key": "access_key"
}