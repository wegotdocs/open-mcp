import { z } from "zod"

export const toolName = `update_an_account`
export const toolDescription = `Update an Account`
export const baseUrl = `https://api.increase.com`
export const path = `/accounts/{account_id}`
export const method = `patch`
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

export const inputParams = z.object({ "path": z.object({ "account_id": z.string().describe("The identifier of the Account to update.") }).optional(), "body": z.object({ "name": z.string().min(1).max(200).describe("The new name of the Account.").optional() }).optional() }).shape