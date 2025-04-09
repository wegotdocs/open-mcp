export { inputParams } from "./schema/root.js"

export const toolName = `apps_get_logs`
export const toolDescription = `Retrieve Deployment Logs`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/deployments/{deployment_id}/components/{component_name}/logs`
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
    "app_id",
    "deployment_id",
    "component_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}