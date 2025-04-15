export { inputParams } from "./schema/root.js"

export const toolName = `fetch_human_evaluation_scenarios`
export const toolDescription = `Fetch Human Evaluation Scenarios`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/human-evaluations/{evaluation_id}/evaluation_scenarios`
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
    "evaluation_id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}