export { inputParams } from "./schema/root.js"

export const toolName = `delete_evaluations_human_evaluations_delete`
export const toolDescription = `Delete Evaluations`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/human-evaluations`
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
  "path": [],
  "cookie": [],
  "body": [
    "evaluations_ids"
  ]
}
export const flatMap = {}