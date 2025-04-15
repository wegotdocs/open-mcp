export { inputParams } from "./schema/root.js"

export const toolName = `get_variant_by_env`
export const toolDescription = `Get Variant By Env`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/apps/get_variant_by_env`
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
    "environment"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}