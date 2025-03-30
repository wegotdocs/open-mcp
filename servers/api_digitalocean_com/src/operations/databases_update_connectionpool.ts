import { z } from "zod"

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

export const inputParams = z.object({ "path": z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."), "pool_name": z.string().describe("The name used to identify the connection pool.") }).optional(), "body": z.object({ "mode": z.string().describe("The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement."), "size": z.number().int().describe("The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster."), "db": z.string().describe("The database for use with the connection pool."), "user": z.string().describe("The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user.").optional() }).optional() }).shape