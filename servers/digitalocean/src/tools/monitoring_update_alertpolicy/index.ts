export { inputParams } from "./schema/root.js"

export const toolName = `monitoring_update_alertpolicy`
export const toolDescription = `Update an Alert Policy`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/alerts/{alert_uuid}`
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
    "alert_uuid"
  ],
  "cookie": [],
  "body": [
    "alerts",
    "compare",
    "description",
    "enabled",
    "entities",
    "tags",
    "type",
    "value",
    "window"
  ]
}
export const flatMap = {}