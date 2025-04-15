export { inputParams } from "./schema/root.js"

export const toolName = `delete_evaluator_config_evaluators_configs_evaluator_config_id_d`
export const toolDescription = `Delete Evaluator Config`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluators/configs/{evaluator_config_id}`
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
    "evaluator_config_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}