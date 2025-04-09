export { inputParams } from "./schema/root.js"

export const toolName = `databases_add_connectionpool`
export const toolDescription = `Add a New Connection Pool (PostgreSQL)`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/pools`
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
  "path": [
    "database_cluster_uuid"
  ],
  "cookie": [],
  "body": [
    "name",
    "mode",
    "size",
    "db",
    "user",
    "connection",
    "private_connection",
    "standby_connection",
    "standby_private_connection"
  ]
}
export const flatMap = {}