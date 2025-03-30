import { z } from "zod"

export const toolName = `databases_update_major_version`
export const toolDescription = `Upgrade Major Version for a Database`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/upgrade`
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

export const inputParams = z.object({ "path": z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.") }).optional(), "body": z.object({ "version": z.string().describe("A string representing the version of the database engine in use for the cluster.").optional() }).optional() }).shape