export { inputParams } from "./schema/root.js"

export const toolName = `list_bases`
export const toolDescription = `List Bases`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/bases`
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
    "app_id",
    "base_name"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}