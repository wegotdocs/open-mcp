export { inputParams } from "./schema/root.js"

export const toolName = `update_app`
export const toolDescription = `Update App`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/apps/{app_id}`
export const method = `patch`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
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
    "app_name"
  ]
}
export const flatMap = {}