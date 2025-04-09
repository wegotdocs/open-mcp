export { inputParams } from "./schema/root.js"

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