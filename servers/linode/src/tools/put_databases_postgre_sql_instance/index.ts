export { inputParams } from "./schema/root.js"

export const toolName = `put_databases_postgre_sql_instance`
export const toolDescription = `Update a PostgreSQL Managed Database`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/databases/postgresql/instances/{instanceId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "allow_list",
    "label",
    "type",
    "updates",
    "version"
  ]
}
export const flatMap = {}