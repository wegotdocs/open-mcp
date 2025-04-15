export { inputParams } from "./schema/root.js"

export const toolName = `switch_plans`
export const toolDescription = `Switch Plans User Route`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/billing/plans/switch`
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
  "query": [
    "plan"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}