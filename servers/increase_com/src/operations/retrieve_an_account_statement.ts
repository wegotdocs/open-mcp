import { z } from "zod"

export const toolName = `retrieve_an_account_statement`
export const toolDescription = `Retrieve an Account Statement`
export const baseUrl = `https://api.increase.com`
export const path = `/account_statements/{account_statement_id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "account_statement_id": z.string().describe("The identifier of the Account Statement to retrieve.") }).optional() }).shape