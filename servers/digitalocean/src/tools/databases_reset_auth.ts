import { z } from "zod"

export const toolName = `databases_reset_auth`
export const toolDescription = `Reset a Database User's Password or Authentication Method`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/databases/{database_cluster_uuid}/users/{username}/reset_auth`
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
    "database_cluster_uuid",
    "username"
  ],
  "cookie": [],
  "body": [
    "mysql_settings"
  ]
}
export const flatMap = {}

export const inputParams = {
  "database_cluster_uuid": z.string().uuid().describe("A unique identifier for a database cluster."),
  "username": z.string().describe("The name of the database user."),
  "mysql_settings": z.object({ "auth_plugin": z.enum(["mysql_native_password","caching_sha2_password"]).describe("A string specifying the authentication method to be used for connections\nto the MySQL user account. The valid values are `mysql_native_password`\nor `caching_sha2_password`. If excluded when creating a new user, the\ndefault for the version of MySQL in use will be used. As of MySQL 8.0, the\ndefault is `caching_sha2_password`.\n") }).optional()
}