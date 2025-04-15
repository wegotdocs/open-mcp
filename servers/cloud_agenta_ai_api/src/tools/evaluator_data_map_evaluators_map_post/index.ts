export { inputParams } from "./schema/root.js"

export const toolName = `evaluator_data_map_evaluators_map_post`
export const toolDescription = `Evaluator Data Map`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluators/map`
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
    "inputs",
    "mapping"
  ]
}
export const flatMap = {}