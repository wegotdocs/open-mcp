import { z } from "zod"

export const inputParamsSchema = {
  "name": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `name` to the tool, first call the tool `expandSchema` with \"/properties/user/properties/name\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The user's legal name</property-description>").optional(),
  "phone_number": z.string().nullable().describe("The user's phone number, in E.164 format: +{countrycode}{number}. For example: \"+14151234567\"").optional(),
  "email_address": z.string().nullable().describe("The user's email address.").optional(),
  "address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `address` to the tool, first call the tool `expandSchema` with \"/properties/user/properties/address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Data about the components comprising an address.</property-description>").optional()
}