import { z } from "zod"

export const toolName = `postbillingalertsiddeactivate`
export const toolDescription = `Deactivate a billing alert`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/billing/alerts/{id}/deactivate`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().max(5000) }).optional() }).shape