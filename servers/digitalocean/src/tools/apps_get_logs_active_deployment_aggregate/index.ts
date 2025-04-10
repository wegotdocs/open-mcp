export { inputParams } from "./schema/root.js"

export const toolName = `apps_get_logs_active_deployment_aggregate`
export const toolDescription = `Retrieve Active Deployment Aggregate Logs`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/logs`
export const method = `get`
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
  "query": [
    "follow",
    "type",
    "pod_connection_timeout"
  ],
  "header": [],
  "path": [
    "app_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}