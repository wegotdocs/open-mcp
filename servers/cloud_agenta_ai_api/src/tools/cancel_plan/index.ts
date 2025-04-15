export { inputParams } from "./schema/root.js"

export const toolName = `cancel_plan`
export const toolDescription = `Cancel Subscription User Route`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/billing/subscription/cancel`
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