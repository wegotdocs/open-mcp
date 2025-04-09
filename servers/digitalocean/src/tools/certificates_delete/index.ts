export { inputParams } from "./schema/root.js"

export const toolName = `certificates_delete`
export const toolDescription = `Delete a Certificate`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/certificates/{certificate_id}`
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
    "certificate_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}