export { inputParams } from "./schema/root.js"

export const toolName = `create_api_key`
export const toolDescription = `Create Api Key`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/keys`
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
  "body": []
}
export const flatMap = {}