export { inputParams } from "./schema/root.js"

export const toolName = `create_checkout`
export const toolDescription = `Create Checkout User Route`
export const baseUrl = `https://cloud.agenta.ai/api`
export const path = `/billing/stripe/checkouts/`
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
    "plan",
    "success_url"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}