export { inputParams } from "./schema/root.js"

export const toolName = `mark_variant_revision_as_hidden`
export const toolDescription = `Remove Variant Revision`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/variants/{variant_id}/revisions/{revision_id}`
export const method = `delete`
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
    "variant_id",
    "revision_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}