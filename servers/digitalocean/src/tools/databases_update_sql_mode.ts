import { z } from "zod"

export const toolName = `databases_update_sql_mode`
export const toolDescription = `Update SQL Mode for a Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/sql_mode`
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
    "database_cluster_uuid"
  ],
  "cookie": [],
  "body": [
    "sql_mode"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."), "sql_mode": z.string().describe("A string specifying the configured SQL modes for the MySQL cluster.") }).shape