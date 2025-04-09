export { inputParams } from "./schema/root.js"

export const toolName = `apps_update`
export const toolDescription = `Update an App`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/apps/{id}`
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
    "id"
  ],
  "cookie": [],
  "body": [
    "spec",
    "update_all_source_versions"
  ]
}
export const flatMap = {}