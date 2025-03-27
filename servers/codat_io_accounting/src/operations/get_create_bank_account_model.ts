import { z } from "zod"

export const toolName = `get_create_bank_account_model`
export const toolDescription = `List push options for bank account bank transactions`
export const baseUrl = `https://api.codat.io`
export const path = `/companies/{companyId}/connections/{connectionId}/options/bankAccounts/{accountId}/bankTransactions`
export const method = `get`
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

export const inputParams = z.object({ "path": z.object({ "companyId": z.string().uuid().describe("Unique identifier for your SMB in Codat."), "connectionId": z.string().uuid().describe("Unique identifier for a company's data connection."), "accountId": z.string().uuid().describe("Unique identifier for an account") }).optional() }).shape