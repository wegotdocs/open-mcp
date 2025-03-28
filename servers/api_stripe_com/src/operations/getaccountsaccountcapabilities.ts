import { z } from "zod"

export const toolName = `getaccountsaccountcapabilities`
export const toolDescription = `List all account capabilities`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/accounts/{account}/capabilities`
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

export const inputParams = z.object({ "path": z.object({ "account": z.string().max(5000) }).optional(), "query": z.object({ "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional() }).optional() }).shape