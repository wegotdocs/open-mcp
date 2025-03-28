import { z } from "zod"

export const toolName = `getbillingportalconfigurationsconfiguration`
export const toolDescription = `Retrieve a portal configuration`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/billing_portal/configurations/{configuration}`
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

export const inputParams = z.object({ "path": z.object({ "configuration": z.string().max(5000) }).optional(), "query": z.object({ "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional() }).optional() }).shape