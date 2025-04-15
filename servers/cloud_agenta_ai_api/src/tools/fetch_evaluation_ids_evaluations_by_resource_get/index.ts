export { inputParams } from "./schema/root.js"

export const toolName = `fetch_evaluation_ids_evaluations_by_resource_get`
export const toolDescription = `Fetch Evaluation Ids`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluations/by_resource`
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
    "resource_type",
    "resource_ids"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}