export { inputParams } from "./schema/root.js"

export const toolName = `volumes_delete_byname`
export const toolDescription = `Delete a Block Storage Volume by Name`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/volumes`
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
  "query": [
    "name",
    "region"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}