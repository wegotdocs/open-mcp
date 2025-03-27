import { z } from "zod"

export const toolName = `list_direct_income_attachments`
export const toolDescription = `List direct income attachments`
export const baseUrl = `https://api.codat.io`
export const path = `/companies/{companyId}/connections/{connectionId}/data/directIncomes/{directIncomeId}/attachments`
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

export const inputParams = z.object({}).shape