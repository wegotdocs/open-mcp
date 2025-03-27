import { z } from "zod"

export const toolName = `create_a_check_transfer`
export const toolDescription = `Create a Check Transfer`
export const baseUrl = `https://api.increase.com`
export const path = `/check_transfers`
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

export const inputParams = z.object({ "body": z.object({ "account_id": z.string().describe("The identifier for the account that will send the transfer."), "address_city": z.string().min(1).max(250).describe("The city of the check's destination."), "address_line1": z.string().min(1).max(250).describe("The street address of the check's destination."), "address_line2": z.string().min(1).max(250).describe("The second line of the address of the check's destination.").optional(), "address_state": z.string().min(1).max(200).describe("The state of the check's destination."), "address_zip": z.string().min(1).max(250).describe("The postal code of the check's destination."), "amount": z.number().int().gte(1).describe("The transfer amount in cents."), "message": z.string().min(1).max(73).describe("The descriptor that will be printed on the memo field on the check."), "note": z.string().min(1).max(200).describe("The descriptor that will be printed on the letter included with the check.").optional(), "recipient_name": z.string().min(1).max(250).describe("The name that will be printed on the check."), "require_approval": z.boolean().describe("Whether the transfer requires explicit approval via the dashboard or API.").optional(), "return_address": z.object({ "city": z.string().min(1).max(200).describe("The city of the return address."), "line1": z.string().min(1).max(200).describe("The first line of the return address."), "line2": z.string().min(1).max(200).describe("The second line of the return address.").optional(), "name": z.string().min(1).max(200).describe("The name of the return address."), "state": z.string().min(1).max(200).describe("The US state of the return address."), "zip": z.string().min(1).max(200).describe("The postal code of the return address.") }).describe("The return address to be printed on the check. If omitted this will default to the address of the Entity of the Account used to make the Check Transfer.").optional() }).optional() }).shape