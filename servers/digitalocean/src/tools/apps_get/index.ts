export { inputParams } from "./schema/root.js"

export const toolName = `apps_get`
export const toolDescription = `Retrieve an Existing App`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{id}`
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
    "name"
  ],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}