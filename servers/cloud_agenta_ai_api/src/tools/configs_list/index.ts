export { inputParams } from "./schema/root.js"

export const toolName = `configs_list`
export const toolDescription = `Configs List`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/variants/configs/list`
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
    "application_ref"
  ]
}
export const flatMap = {}