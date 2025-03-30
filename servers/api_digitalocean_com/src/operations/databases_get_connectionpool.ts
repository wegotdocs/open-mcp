import { z } from "zod"

export const toolName = `databases_get_connectionpool`
export const toolDescription = `Retrieve Existing Connection Pool (PostgreSQL)`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/pools/{pool_name}`
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

export const inputParams = z.object({ "path": z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."), "pool_name": z.string().describe("The name used to identify the connection pool.") }).optional() }).shape