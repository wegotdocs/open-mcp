export { inputParams } from "./schema/root.js"

export const toolName = `get_evaluator_config_evaluators_configs_evaluator_config_id_get`
export const toolDescription = `Get Evaluator Config`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluators/configs/{evaluator_config_id}`
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
  "query": [],
  "header": [],
  "path": [
    "evaluator_config_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}