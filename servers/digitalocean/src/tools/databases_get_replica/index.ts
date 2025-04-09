export { inputParams } from "./schema/root.js"

export const toolName = `databases_get_replica`
export const toolDescription = `Retrieve an Existing Read-only Replica`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/replicas/{replica_name}`
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
    "database_cluster_uuid",
    "replica_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}