import { z } from "zod"

export const toolName = `databases_delete_connectionpool`
export const toolDescription = `Delete a Connection Pool (PostgreSQL)`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/pools/{pool_name}`
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

export const inputParams = z.object({ "path": z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."), "pool_name": z.string().describe("The name used to identify the connection pool.") }).optional() }).shape