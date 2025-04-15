export { inputParams } from "./schema/root.js"

export const toolName = `add_variant_from_url`
export const toolDescription = `Add Variant From Url Route`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/apps/{app_id}/variant/from-service`
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
    "url",
    "commit_message",
    "base_name",
    "config_name"
  ]
}
export const flatMap = {}