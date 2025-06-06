import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().describe("New user email address.").optional(),
  "first_name": z.string().describe("Customer first name.").optional(),
  "last_name": z.string().describe("Customer last name.").optional(),
  "username": z.string().describe("New user username.").optional(),
  "password": z.string().describe("New user password.").optional(),
  "billing": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `billing` to the tool, first call the tool `expandSchema` with \"/properties/billing\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>List of billing address data.</property-description>").optional(),
  "shipping": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `shipping` to the tool, first call the tool `expandSchema` with \"/properties/shipping\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>List of shipping address data.</property-description>").optional(),
  "meta_data": z.array(z.object({ "id": z.number().int().describe("Meta ID.").optional(), "key": z.string().describe("Meta key.").optional(), "value": z.string().describe("Meta value.").optional() })).describe("Meta data.").optional()
}