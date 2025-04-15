export { inputParams } from "./schema/root.js"

export const toolName = `fetch_list_evaluations_evaluations_get`
export const toolDescription = `Fetch List Evaluations`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluations`
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
    "app_id"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}