export { inputParams } from "./schema/root.js"

export const toolName = `add_variant_from_key`
export const toolDescription = `Add Variant From Key Route`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/apps/{app_id}/variant/from-template`
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
  "path": [
    "app_id"
  ],
  "cookie": [],
  "body": [
    "variant_name",
    "key",
    "commit_message",
    "base_name",
    "config_name"
  ]
}
export const flatMap = {}