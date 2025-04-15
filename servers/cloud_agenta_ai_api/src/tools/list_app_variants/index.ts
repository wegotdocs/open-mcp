export { inputParams } from "./schema/root.js"

export const toolName = `list_app_variants`
export const toolDescription = `List App Variants`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/apps/{app_id}/variants`
export const method = `get`
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
  "body": []
}
export const flatMap = {}