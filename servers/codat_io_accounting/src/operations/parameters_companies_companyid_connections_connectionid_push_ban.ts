import { z } from "zod"

export const toolName = `parameters_companies_companyid_connections_connectionid_push_ban`
export const toolDescription = ``
export const baseUrl = `https://api.codat.io`
export const path = `/companies/{companyId}/connections/{connectionId}/push/bankAccounts/{bankAccountId}`
export const method = `parameters`
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

export const inputParams = z.object({}).shape