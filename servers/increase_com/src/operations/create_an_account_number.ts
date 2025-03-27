import { z } from "zod"

export const toolName = `create_an_account_number`
export const toolDescription = `Create an Account Number`
export const baseUrl = `https://api.increase.com`
export const path = `/account_numbers`
export const method = `post`
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

export const inputParams = z.object({ "body": z.object({ "account_id": z.string().describe("The Account the Account Number should belong to."), "name": z.string().min(1).max(200).describe("The name you choose for the Account Number.") }).optional() }).shape