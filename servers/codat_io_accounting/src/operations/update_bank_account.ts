import { z } from "zod"

export const toolName = `update_bank_account`
export const toolDescription = `Update bank account`
export const baseUrl = `https://api.codat.io`
export const path = `/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{bankAccountId}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
    "in": "header",
    "envVarName": "AUTHORIZATION",
    "schemeType": "apiKey",
    "schemeName": "Authorization"
  }
]

export const inputParams = z.object({ "query": z.object({ "timeoutInMinutes": z.number().int().optional(), "forceUpdate": z.boolean() }).optional(), "body": z.string().optional() }).shape