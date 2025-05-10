import { z } from "zod"

export const inputParamsSchema = {
  "legal_name": z.string().describe("The user's legal name. If the user is a business, provide the business name."),
  "phone_number": z.string().describe("The user's phone number.").optional(),
  "email_address": z.string().describe("The user's email address.").optional(),
  "address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `address` to the tool, first call the tool `expandSchema` with \"/properties/user/properties/address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The address associated with the account holder.</property-description>").optional()
}