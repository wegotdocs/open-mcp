import { z } from "zod"

export const toolName = `databases_get_evictionpolicy`
export const toolDescription = `Retrieve the Eviction Policy for a Redis Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/eviction_policy`
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

export const inputParams = z.object({ "path": z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.") }).optional() }).shape