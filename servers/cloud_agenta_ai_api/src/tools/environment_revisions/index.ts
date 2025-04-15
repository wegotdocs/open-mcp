export { inputParams } from "./schema/root.js"

export const toolName = `environment_revisions`
export const toolDescription = `List App Environment Revisions`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/apps/{app_id}/revisions/{environment_name}`
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
    "app_id",
    "environment_name"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}