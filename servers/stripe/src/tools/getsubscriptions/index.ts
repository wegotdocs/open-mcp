export { inputParams } from "./schema/root.js"

export const toolName = `getsubscriptions`
export const toolDescription = `List subscriptions`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/subscriptions`
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
    "automatic_tax",
    "collection_method",
    "created",
    "current_period_end",
    "current_period_start",
    "customer",
    "ending_before",
    "expand",
    "limit",
    "price",
    "starting_after",
    "status",
    "test_clock"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}