export { inputParams } from "./schema/root.js"

export const toolName = `get_evaluation_scenario_score_router_human_evaluations_evaluatio`
export const toolDescription = `Get Evaluation Scenario Score Router`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/human-evaluations/evaluation_scenario/{evaluation_scenario_id}/score`
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
    "evaluation_scenario_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}