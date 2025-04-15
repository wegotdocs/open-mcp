export { inputParams } from "./schema/root.js"

export const toolName = `reset_user_password`
export const toolDescription = `Reset User Password`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/profile/reset-password`
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
  "query": [
    "user_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}