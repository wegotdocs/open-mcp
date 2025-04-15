export { inputParams } from "./schema/root.js"

export const toolName = `update_secret`
export const toolDescription = `Update Secret`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/vault/v1/secrets/{secret_id}`
export const method = `put`
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
  "body": [
    "header",
    "secret"
  ]
}
export const flatMap = {}