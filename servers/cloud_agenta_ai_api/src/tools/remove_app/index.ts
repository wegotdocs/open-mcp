export { inputParams } from "./schema/root.js"

export const toolName = `remove_app`
export const toolDescription = `Remove App`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/apps/{app_id}`
export const method = `delete`
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