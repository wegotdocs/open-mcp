export { inputParams } from "./schema/root.js"

export const toolName = `getcreditnotespreviewlines`
export const toolDescription = `Retrieve a credit note preview's line items`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/credit_notes/preview/lines`
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
    "amount",
    "credit_amount",
    "effective_at",
    "email_type",
    "ending_before",
    "expand",
    "invoice",
    "limit",
    "lines",
    "memo",
    "metadata",
    "out_of_band_amount",
    "reason",
    "refund_amount",
    "refunds",
    "shipping_cost",
    "starting_after"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}