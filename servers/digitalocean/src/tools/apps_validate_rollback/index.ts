export { inputParams } from "./schema/root.js"

export const toolName = `apps_validate_rollback`
export const toolDescription = `Validate App Rollback`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{app_id}/rollback/validate`
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
    "app_id"
  ],
  "cookie": [],
  "body": [
    "deployment_id",
    "skip_pin"
  ]
}
export const flatMap = {}