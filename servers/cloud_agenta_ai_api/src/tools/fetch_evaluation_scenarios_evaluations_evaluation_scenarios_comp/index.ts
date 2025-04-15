export { inputParams } from "./schema/root.js"

export const toolName = `fetch_evaluation_scenarios_evaluations_evaluation_scenarios_comp`
export const toolDescription = `Fetch Evaluation Scenarios`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluations/evaluation_scenarios/comparison-results`
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
    "evaluations_ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}