import { z } from "zod"

export const toolName = `databases_update_user`
export const toolDescription = `Update a Database User`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/users/{username}`
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

export const inputParams = z.object({ "path": z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."), "username": z.string().describe("The name of the database user.") }).optional(), "body": z.string().optional() }).shape