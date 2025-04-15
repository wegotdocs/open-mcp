export { inputParams } from "./schema/root.js"

export const toolName = `update_variant_parameters`
export const toolDescription = `Update Variant Parameters`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/variants/{variant_id}/parameters`
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
    "variant_id"
  ],
  "cookie": [],
  "body": [
    "parameters",
    "commit_message"
  ]
}
export const flatMap = {}