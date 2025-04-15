export { inputParams } from "./schema/root.js"

export const toolName = `get_evaluator_configs_evaluators_configs_get`
export const toolDescription = `Get Evaluator Configs`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluators/configs`
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
  "query": [
    "app_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}