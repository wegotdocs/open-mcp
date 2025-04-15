export { inputParams } from "./schema/root.js"

export const toolName = `handle_events`
export const toolDescription = `Handle Events`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/billing/stripe/events/`
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