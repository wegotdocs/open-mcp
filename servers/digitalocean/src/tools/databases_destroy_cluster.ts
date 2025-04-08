import { z } from "zod"

export const toolName = `databases_destroy_cluster`
export const toolDescription = `Destroy a Database Cluster`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}`
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
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "database_cluster_uuid"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster.")
}