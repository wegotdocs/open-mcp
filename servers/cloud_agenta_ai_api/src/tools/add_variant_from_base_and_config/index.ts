export { inputParams } from "./schema/root.js"

export const toolName = `add_variant_from_base_and_config`
export const toolDescription = `Add Variant From Base And Config`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/variants/from-base`
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
  "body": [
    "base_id",
    "new_variant_name",
    "new_config_name",
    "parameters",
    "commit_message"
  ]
}
export const flatMap = {}