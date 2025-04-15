export { inputParams } from "./schema/root.js"

export const toolName = `update_evaluation_scenario_router_human_evaluations_evaluation_i`
export const toolDescription = `Update Evaluation Scenario Router`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/human-evaluations/{evaluation_id}/evaluation_scenario/{evaluation_scenario_id}/{evaluation_type}`
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
    "evaluation_id",
    "evaluation_scenario_id",
    "evaluation_type"
  ],
  "cookie": [],
  "body": [
    "vote",
    "score",
    "correct_answer",
    "outputs",
    "inputs",
    "is_pinned",
    "note"
  ]
}
export const flatMap = {}