export { inputParams } from "./schema/root.js"

export const toolName = `registry_get_garbagecollection`
export const toolDescription = `Get Active Garbage Collection`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/{registry_name}/garbage-collection`
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
    "registry_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}