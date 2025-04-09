export { inputParams } from "./schema/root.js"

export const toolName = `spaceskey_delete`
export const toolDescription = `Delete a Spaces Access Key`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/spaces/keys/{access_key}`
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
    "access_key"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}