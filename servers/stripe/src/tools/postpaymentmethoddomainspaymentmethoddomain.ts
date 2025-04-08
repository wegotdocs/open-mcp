import { z } from "zod"

export const toolName = `postpaymentmethoddomainspaymentmethoddomain`
export const toolDescription = `Update a payment method domain`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/payment_method_domains/{payment_method_domain}`
export const method = `post`
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
  "query": [],
  "header": [],
  "path": [
    "payment_method_domain"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "payment_method_domain": z.string().max(5000)
}