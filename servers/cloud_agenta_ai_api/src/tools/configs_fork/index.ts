export { inputParams } from "./schema/root.js"

export const toolName = `configs_fork`
export const toolDescription = `Configs Fork`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/variants/configs/fork`
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
    "variant_ref",
    "environment_ref",
    "application_ref"
  ]
}
export const flatMap = {}