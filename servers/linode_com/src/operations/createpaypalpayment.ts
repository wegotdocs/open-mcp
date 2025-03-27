import { z } from "zod"

export const toolName = `createpaypalpayment`
export const toolDescription = `PayPal Payment Stage`
export const baseUrl = `https://api.linode.com/v4`
export const path = `/account/payments/paypal`
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

export const inputParams = z.object({ "body": z.object({ "cancel_url": z.string().describe("The URL to have PayPal redirect to when Payment is cancelled."), "redirect_url": z.string().describe("The URL to have PayPal redirect to when Payment is approved."), "usd": z.string().describe("The payment amount in USD. Minimum accepted value of $5 USD. Maximum accepted value of $500 USD or credit card payment limit; whichever value is highest. PayPal's maximum transaction limit is $10,000 USD.") }).describe("An object representing the staging of a Payment via PayPal.\n").optional() }).shape