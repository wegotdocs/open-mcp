export { inputParams } from "./schema/root.js"

export const toolName = `post_execute_pay_pal_payment`
export const toolDescription = `Execute a PayPal payment`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/{apiVersion}/account/payments/paypal/execute`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  },
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "payer_id",
    "payment_id"
  ]
}
export const flatMap = {}