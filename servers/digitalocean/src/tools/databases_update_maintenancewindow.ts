import { z } from "zod"

export const toolName = `databases_update_maintenancewindow`
export const toolDescription = `Configure a Database Cluster's Maintenance Window`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/maintenance`
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
    "day",
    "hour",
    "pending",
    "description"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."), "day": z.string().describe("The day of the week on which to apply maintenance updates."), "hour": z.string().describe("The hour in UTC at which maintenance updates will be applied in 24 hour format."), "pending": z.boolean().describe("A boolean value indicating whether any maintenance is scheduled to be performed in the next window.").readonly().optional(), "description": z.array(z.string()).describe("A list of strings, each containing information about a pending maintenance update.").readonly().optional() }).shape