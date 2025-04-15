export { inputParams } from "./schema/root.js"

export const toolName = `create_account`
export const toolDescription = `Create Account`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/admin/account`
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
    "user",
    "scope"
  ]
}
export const flatMap = {}