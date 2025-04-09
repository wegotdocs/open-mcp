export { inputParams } from "./schema/root.js"

export const toolName = `apps_validate_appspec`
export const toolDescription = `Propose an App Spec`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/propose`
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
  "path": [],
  "cookie": [],
  "body": [
    "spec",
    "app_id"
  ]
}
export const flatMap = {}