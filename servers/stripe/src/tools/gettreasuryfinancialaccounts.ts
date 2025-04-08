import { z } from "zod"

export const toolName = `gettreasuryfinancialaccounts`
export const toolDescription = `List all FinancialAccounts`
export const baseUrl = `https://api.stripe.com`
export const path = `/v1/treasury/financial_accounts`
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
    "created",
    "ending_before",
    "expand",
    "limit",
    "starting_after"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = {
  "created": z.union([z.object({ "gt": z.number().int().optional(), "gte": z.number().int().optional(), "lt": z.number().int().optional(), "lte": z.number().int().optional() }), z.number().int()]).describe("Only return FinancialAccounts that were created during the given date interval.").optional(),
  "ending_before": z.string().max(5000).describe("An object ID cursor for use in pagination.").optional(),
  "expand": z.array(z.string().max(5000)).describe("Specifies which fields in the response should be expanded.").optional(),
  "limit": z.number().int().describe("A limit ranging from 1 to 100 (defaults to 10).").optional(),
  "starting_after": z.string().max(5000).describe("An object ID cursor for use in pagination.").optional()
}