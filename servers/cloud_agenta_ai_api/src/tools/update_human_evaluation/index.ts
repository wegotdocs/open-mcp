export { inputParams } from "./schema/root.js"

export const toolName = `update_human_evaluation`
export const toolDescription = `Update Human Evaluation`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/human-evaluations/{evaluation_id}`
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
    "evaluation_id"
  ],
  "cookie": [],
  "body": [
    "status"
  ]
}
export const flatMap = {}