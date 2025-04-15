export { inputParams } from "./schema/root.js"

export const toolName = `create_secret`
export const toolDescription = `Create Secret`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/vault/v1/secrets`
export const method = `post`
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
  "path": [],
  "cookie": [],
  "body": [
    "header",
    "secret"
  ]
}
export const flatMap = {}