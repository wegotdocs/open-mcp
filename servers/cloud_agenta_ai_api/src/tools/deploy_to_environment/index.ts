export { inputParams } from "./schema/root.js"

export const toolName = `deploy_to_environment`
export const toolDescription = `Deploy To Environment`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/environments/deploy`
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
    "environment_name",
    "variant_id",
    "commit_message"
  ]
}
export const flatMap = {}