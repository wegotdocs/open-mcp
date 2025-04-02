import { z } from "zod"

export const toolName = `databases_update_onlinemigration`
export const toolDescription = `Start an Online Migration`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/online-migration`
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
    "source",
    "disable_ssl",
    "ignore_dbs"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."), "source": z.object({ "host": z.string().describe("The FQDN pointing to the database cluster's current primary node.").optional(), "port": z.number().int().describe("The port on which the database cluster is listening.").optional(), "dbname": z.string().describe("The name of the default database.").optional(), "username": z.string().describe("The default user for the database.").optional(), "password": z.string().describe("The randomly generated password for the default user.").optional() }), "disable_ssl": z.boolean().describe("Enables SSL encryption when connecting to the source database.").optional(), "ignore_dbs": z.array(z.string()).describe("List of databases that should be ignored during migration.") }).shape