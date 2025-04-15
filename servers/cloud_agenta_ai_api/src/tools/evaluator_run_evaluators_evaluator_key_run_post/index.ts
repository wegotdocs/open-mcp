export { inputParams } from "./schema/root.js"

export const toolName = `evaluator_run_evaluators_evaluator_key_run_post`
export const toolDescription = `Evaluator Run`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluators/{evaluator_key}/run`
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
  "path": [
    "evaluator_key"
  ],
  "cookie": [],
  "body": [
    "inputs",
    "settings",
    "credentials"
  ]
}
export const flatMap = {}