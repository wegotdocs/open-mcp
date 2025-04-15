export { inputParams } from "./schema/root.js"

export const toolName = `updateendpoint`
export const toolDescription = `Update endpoint, this can also be used to start or stop a dedicated endpoint`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/endpoints/{endpointId}`
export const method = `patch`
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
    "endpointId"
  ],
  "cookie": [],
  "body": [
    "display_name",
    "state",
    "autoscaling",
    "inactive_timeout"
  ]
}
export const flatMap = {}