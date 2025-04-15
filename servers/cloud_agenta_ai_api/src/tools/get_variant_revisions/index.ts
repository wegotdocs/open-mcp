export { inputParams } from "./schema/root.js"

export const toolName = `get_variant_revisions`
export const toolDescription = `Get Variant Revisions`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/variants/{variant_id}/revisions`
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
  "path": [
    "variant_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}