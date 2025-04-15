export { inputParams } from "./schema/root.js"

export const toolName = `create_evaluation`
export const toolDescription = `Create Evaluation`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluations`
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
    "revisions_ids",
    "evaluators_configs",
    "testset_id",
    "rate_limit",
    "correct_answer_column"
  ]
}
export const flatMap = {}