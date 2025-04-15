export { inputParams } from "./schema/root.js"

export const toolName = `update_variant_url`
export const toolDescription = `Update Variant Url`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/variants/{variant_id}/service`
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
  "path": [],
  "cookie": [],
  "body": [
    "url",
    "variant_id",
    "commit_message"
  ]
}
export const flatMap = {}