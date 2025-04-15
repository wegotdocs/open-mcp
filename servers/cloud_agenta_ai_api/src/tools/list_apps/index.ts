export { inputParams } from "./schema/root.js"

export const toolName = `list_apps`
export const toolDescription = `List Apps`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/apps`
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
  "query": [
    "app_name"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}