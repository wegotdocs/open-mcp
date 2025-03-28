import { z } from "zod"

export const toolName = `getbillingcreditbalancesummary`
export const toolDescription = `Retrieve the credit balance summary for a customer`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/billing/credit_balance_summary`
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

export const inputParams = z.object({ "query": z.object({ "customer": z.string().max(5000).describe("The customer for which to fetch credit balance summary."), "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(), "filter": z.object({ "applicability_scope": z.object({ "price_type": z.literal("metered").optional(), "prices": z.array(z.object({ "id": z.string().max(5000) })).optional() }).optional(), "credit_grant": z.string().max(5000).optional(), "type": z.enum(["applicability_scope","credit_grant"]) }).describe("The filter criteria for the credit balance summary.") }).optional() }).shape