export { inputParams } from "./schema/root.js"

export const toolName = `monitoring_create_alertpolicy`
export const toolDescription = `Create Alert Policy`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/alerts`
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