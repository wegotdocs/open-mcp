export { inputParams } from "./schema/root.js"

export const toolName = `fetch_results`
export const toolDescription = `Fetch Results`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/human-evaluations/{evaluation_id}/results`
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