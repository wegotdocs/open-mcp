import { z } from "zod"

export const toolName = `postcustomerscustomerbankaccountsid`
export const toolDescription = `<p>Update a specified source for a given customer.</p>`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/customers/{customer}/bank_accounts/{id}`
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
    "customer",
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "customer": z.string().max(5000), "id": z.string().max(5000) }).shape