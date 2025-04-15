import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("The client ID of the originator"),
  "name": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `name` to the tool, first call the tool `expandSchema` with \"/properties/name\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The person's legal name</property-description>").optional(),
  "email_address": z.string().describe("A valid email address. Must not have leading or trailing spaces.").optional(),
  "phone_number": z.string().describe("A valid phone number in E.164 format.").optional(),
  "address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `address` to the tool, first call the tool `expandSchema` with \"/properties/address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Home address of a person</property-description>").optional(),
  "id_number": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `id_number` to the tool, first call the tool `expandSchema` with \"/properties/id_number\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>ID number of the person</property-description>").optional(),
  "date_of_birth": z.string().date().describe("The date of birth of the person. Formatted as YYYY-MM-DD.").optional(),
  "relationship_to_originator": z.string().describe("The relationship between this person and the originator they are related to.").optional()
}