export { inputParams } from "./schema/root.js"

export const toolName = `apps_cancel_deployment`
export const toolDescription = `Cancel a Deployment`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/deployments/{deployment_id}/cancel`
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
    "app_id",
    "deployment_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}