export { inputParams } from "./schema/root.js"

export const toolName = `create_human_evaluation`
export const toolDescription = `Create Human Evaluation`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/human-evaluations`
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
    "variant_ids",
    "evaluation_type",
    "inputs",
    "testset_id",
    "status"
  ]
}
export const flatMap = {}