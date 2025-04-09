export { inputParams } from "./schema/root.js"

export const toolName = `databases_delete_logsink`
export const toolDescription = `Delete Logsink for a Database Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/logsink/{logsink_id}`
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
    "database_cluster_uuid",
    "logsink_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}