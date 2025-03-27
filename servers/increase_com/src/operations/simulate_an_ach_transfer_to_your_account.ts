import { z } from "zod"

export const toolName = `simulate_an_ach_transfer_to_your_account`
export const toolDescription = `Simulate an ACH Transfer to your account`
export const baseUrl = `https://api.increase.com`
export const path = `/simulations/inbound_ach_transfers`
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

export const inputParams = z.object({ "body": z.object({ "account_number_id": z.string().describe("The identifier of the Account Number the inbound ACH Transfer is for."), "amount": z.number().int().describe("The transfer amount in cents. A positive amount originates a credit transfer pushing funds to the receiving account. A negative amount originates a debit transfer pulling funds from the receiving account."), "company_descriptive_date": z.string().min(1).max(6).describe("The description of the date of the transfer.").optional(), "company_discretionary_data": z.string().min(1).max(20).describe("Data associated with the transfer set by the sender.").optional(), "company_entry_description": z.string().min(1).max(10).describe("The description of the transfer set by the sender.").optional(), "company_id": z.string().min(1).max(15).describe("The sender's company id.").optional(), "company_name": z.string().min(1).max(16).describe("The name of the sender.").optional() }).optional() }).shape