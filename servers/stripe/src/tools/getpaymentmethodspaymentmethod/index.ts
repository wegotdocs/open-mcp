export { inputParams } from "./schema/root.js"

export const toolName = `getpaymentmethodspaymentmethod`
export const toolDescription = `Retrieve a PaymentMethod`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/payment_methods/{payment_method}`
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
    "expand"
  ],
  "header": [],
  "path": [
    "payment_method"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}