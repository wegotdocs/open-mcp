import { z } from "zod"

export const toolName = `deleteaccountsaccountbankaccountsid`
export const toolDescription = `Delete an external account`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/accounts/{account}/bank_accounts/{id}`
export const method = `delete`
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
    "account",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "account": z.string().max(5000), "id": z.string().describe("Unique identifier for the external account to be deleted.") }).shape