export { inputParams } from "./schema/root.js"

export const toolName = `monitoring_list_sinks`
export const toolDescription = `Lists all sinks`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/monitoring/sinks`
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
    "resource_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}