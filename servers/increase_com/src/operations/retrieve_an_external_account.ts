import { z } from "zod"

export const toolName = `retrieve_an_external_account`
export const toolDescription = `Retrieve an External Account`
export const baseUrl = `https://api.increase.com`
export const path = `/external_accounts/{external_account_id}`
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

export const inputParams = z.object({ "path": z.object({ "external_account_id": z.string().describe("The identifier of the External Account.") }).optional() }).shape