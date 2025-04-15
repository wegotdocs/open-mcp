export { inputParams } from "./schema/root.js"

export const toolName = `create_new_evaluator_config_evaluators_configs_post`
export const toolDescription = `Create New Evaluator Config`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluators/configs`
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
    "app_id",
    "name",
    "evaluator_key",
    "settings_values"
  ]
}
export const flatMap = {}