import { z } from "zod"

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

export const inputParams = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "name": z.string().describe("A unique name for the connection pool. Must be between 3 and 60 characters."),
  "mode": z.string().describe("The PGBouncer transaction mode for the connection pool. The allowed values are session, transaction, and statement."),
  "size": z.number().int().describe("The desired size of the PGBouncer connection pool. The maximum allowed size is determined by the size of the cluster's primary node. 25 backend server connections are allowed for every 1GB of RAM. Three are reserved for maintenance. For example, a primary node with 1 GB of RAM allows for a maximum of 22 backend server connections while one with 4 GB would allow for 97. Note that these are shared across all connection pools in a cluster."),
  "db": z.string().describe("The database for use with the connection pool."),
  "user": z.string().describe("The name of the user for use with the connection pool. When excluded, all sessions connect to the database as the inbound user.").optional(),
  "connection": z.string().optional(),
  "private_connection": z.string().optional(),
  "standby_connection": z.string().optional(),
  "standby_private_connection": z.string().optional()
}