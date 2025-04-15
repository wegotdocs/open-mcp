export { inputParams } from "./schema/root.js"

export const toolName = `otlp_v1_traces`
export const toolDescription = `Receive /v1/traces via OTLP`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/otlp/v1/traces`
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
  "body": []
}
export const flatMap = {}