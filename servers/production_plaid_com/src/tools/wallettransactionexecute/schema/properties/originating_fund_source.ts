import { z } from "zod"

export const inputParamsSchema = {
  "full_name": z.string().describe("The full name associated with the source of the funds."),
  "address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `address` to the tool, first call the tool `expandSchema` with \"/properties/originating_fund_source/properties/address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The optional address of the payment recipient's bank account. Required by most institutions outside of the UK.</property-description>"),
  "account_number": z.string().describe("The account number from which the funds are sourced."),
  "bic": z.string().min(8).max(11).describe("The Business Identifier Code, also known as SWIFT code, for this bank account.")
}