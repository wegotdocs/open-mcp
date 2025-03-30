import { z } from "zod"

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

export const inputParams = z.object({ "path": z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."), "replica_name": z.string().describe("The name of the database replica.") }).optional() }).shape