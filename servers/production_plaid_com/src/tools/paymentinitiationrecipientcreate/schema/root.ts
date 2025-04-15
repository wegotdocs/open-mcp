import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "name": z.string().min(1).describe("The name of the recipient. We recommend using strings of length 18 or less and avoid special characters to ensure compatibility with all institutions."),
  "iban": z.string().min(15).max(34).nullable().describe("The International Bank Account Number (IBAN) for the recipient. If BACS data is not provided, an IBAN is required.").optional(),
  "bacs": z.string().optional(),
  "address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `address` to the tool, first call the tool `expandSchema` with \"/properties/address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The optional address of the payment recipient's bank account. Required by most institutions outside of the UK.</property-description>").optional()
}