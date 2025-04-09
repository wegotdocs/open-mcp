export { inputParams } from "./schema/root.js"

export const toolName = `getradarearlyfraudwarnings`
export const toolDescription = `List all early fraud warnings`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/radar/early_fraud_warnings`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [
    "charge",
    "created",
    "ending_before",
    "expand",
    "limit",
    "payment_intent",
    "starting_after"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}