import { z } from "zod"

export const toolName = `getaccountsaccountexternalaccountsid`
export const toolDescription = `Retrieve an external account`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/accounts/{account}/external_accounts/{id}`
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
    "account",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "account": z.string().max(5000), "id": z.string().describe("Unique identifier for the external account to be retrieved."), "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional() }).shape