export { inputParams } from "./schema/root.js"

export const toolName = `update_evaluator_config_evaluators_configs_evaluator_config_id_p`
export const toolDescription = `Update Evaluator Config`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluators/configs/{evaluator_config_id}`
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
    "evaluator_config_id"
  ],
  "cookie": [],
  "body": [
    "name",
    "evaluator_key",
    "settings_values"
  ]
}
export const flatMap = {}