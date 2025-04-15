export { inputParams } from "./schema/root.js"

export const toolName = `delete_api_key`
export const toolDescription = `Delete Api Key`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/keys/{key_prefix}`
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
    "key_prefix"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}