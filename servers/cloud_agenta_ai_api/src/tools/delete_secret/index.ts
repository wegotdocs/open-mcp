export { inputParams } from "./schema/root.js"

export const toolName = `delete_secret`
export const toolDescription = `Delete Secret`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/vault/v1/secrets/{secret_id}`
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
    "secret_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}