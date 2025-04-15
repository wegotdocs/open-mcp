import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).describe("The name of the payer as it appears in their bank account"),
  "numbers": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `numbers` to the tool, first call the tool `expandSchema` with \"/properties/payer_details/properties/numbers\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The counterparty's bank account numbers. Exactly one of IBAN or BACS data is required.</property-description>"),
  "address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `address` to the tool, first call the tool `expandSchema` with \"/properties/payer_details/properties/address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The optional address of the payment recipient's bank account. Required by most institutions outside of the UK.</property-description>").optional(),
  "date_of_birth": z.string().date().nullable().describe("The payer's birthdate, in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) (YYYY-MM-DD) format.").optional(),
  "phone_numbers": z.array(z.string()).describe("The payer's phone numbers in E.164 format: +{countrycode}{number}").optional(),
  "emails": z.array(z.string()).describe("The payer's emails").optional()
}