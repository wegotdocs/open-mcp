export { inputParams } from "./schema/root.js"

export const toolName = `spaceskey_create`
export const toolDescription = `Create a New Spaces Access Key`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/spaces/keys`
export const method = `post`
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
  "path": [],
  "cookie": [],
  "body": [
    "name",
    "grants",
    "access_key",
    "created_at"
  ]
}
export const flatMap = {}