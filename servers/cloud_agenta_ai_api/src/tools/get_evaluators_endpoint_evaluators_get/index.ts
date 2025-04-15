export { inputParams } from "./schema/root.js"

export const toolName = `get_evaluators_endpoint_evaluators_get`
export const toolDescription = `Get Evaluators Endpoint`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/evaluators`
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
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}