export { inputParams } from "./schema/root.js"

export const toolName = `registry_update_garbagecollection`
export const toolDescription = `Update Garbage Collection`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/registry/{registry_name}/garbage-collection/{garbage_collection_uuid}`
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
    "registry_name",
    "garbage_collection_uuid"
  ],
  "cookie": [],
  "body": [
    "cancel"
  ]
}
export const flatMap = {}