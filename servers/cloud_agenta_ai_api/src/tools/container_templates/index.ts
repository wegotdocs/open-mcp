export { inputParams } from "./schema/root.js"

export const toolName = `container_templates`
export const toolDescription = `Container Templates`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/containers/templates`
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