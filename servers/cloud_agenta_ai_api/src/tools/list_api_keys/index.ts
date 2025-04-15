export { inputParams } from "./schema/root.js"

export const toolName = `list_api_keys`
export const toolDescription = `List Api Keys`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/keys`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}