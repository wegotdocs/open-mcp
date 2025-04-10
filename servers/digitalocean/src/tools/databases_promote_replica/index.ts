export { inputParams } from "./schema/root.js"

export const toolName = `databases_promote_replica`
export const toolDescription = `Promote a Read-only Replica to become a Primary Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/replicas/{replica_name}/promote`
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
    "replica_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}