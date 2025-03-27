import { z } from "zod"

export const toolName = `create_an_ach_prenotification`
export const toolDescription = `Create an ACH Prenotification`
export const baseUrl = `https://api.increase.com`
export const path = `/ach_prenotifications`
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

export const inputParams = z.object({ "body": z.object({ "account_number": z.string().min(1).max(200).describe("The account number for the destination account."), "addendum": z.string().min(1).max(80).describe("Additional information that will be sent to the recipient.").optional(), "company_descriptive_date": z.string().min(1).max(6).describe("The description of the date of the transfer.").optional(), "company_discretionary_data": z.string().min(1).max(20).describe("The data you choose to associate with the transfer.").optional(), "company_entry_description": z.string().min(1).max(10).describe("The description of the transfer you wish to be shown to the recipient.").optional(), "company_name": z.string().min(1).max(16).describe("The name by which the recipient knows you.").optional(), "credit_debit_indicator": z.enum(["credit","debit"]).describe("Whether the Prenotification is for a future debit or credit.").optional(), "effective_date": z.string().date().describe("The transfer effective date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.").optional(), "individual_id": z.string().min(1).max(22).describe("Your identifer for the transfer recipient.").optional(), "individual_name": z.string().min(1).max(22).describe("The name of the transfer recipient. This value is information and not verified by the recipient's bank.").optional(), "routing_number": z.string().min(9).max(9).describe("The American Bankers' Association (ABA) Routing Transit Number (RTN) for the destination account."), "standard_entry_class_code": z.enum(["corporate_credit_or_debit","prearranged_payments_and_deposit","internet_initiated"]).describe("The Standard Entry Class (SEC) code to use for the ACH Prenotification.").optional() }).optional() }).shape