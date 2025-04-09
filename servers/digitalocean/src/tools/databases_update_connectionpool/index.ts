export { inputParams } from "./schema/root.js"

export const toolName = `databases_update_connectionpool`
export const toolDescription = `Update Connection Pools (PostgreSQL)`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/pools/{pool_name}`
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
    "database_cluster_uuid",
    "pool_name"
  ],
  "cookie": [],
  "body": [
    "mode",
    "size",
    "db",
    "user"
  ]
}
export const flatMap = {}