import { z } from "zod"

export const toolName = `create_a_check_deposit`
export const toolDescription = `Create a Check Deposit`
export const baseUrl = `https://api.increase.com`
export const path = `/check_deposits`
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

export const inputParams = z.object({ "body": z.object({ "account_id": z.string().describe("The identifier for the Account to deposit the check in."), "amount": z.number().int().gte(0).describe("The deposit amount in the minor unit of the account currency. For dollars, for example, this is cents."), "back_image_file_id": z.string().describe("The File containing the check's back image."), "currency": z.string().min(1).max(200).describe("The currency to use for the deposit."), "front_image_file_id": z.string().describe("The File containing the check's front image.") }).optional() }).shape