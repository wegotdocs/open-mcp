import { z } from "zod"

export const inputParamsSchema = {
  "first_name": z.string().nullable().describe("The user's first name").optional(),
  "last_name": z.string().nullable().describe("The user's last name").optional(),
  "email_address": z.string().nullable().describe("The user's email address").optional(),
  "home_address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `home_address` to the tool, first call the tool `expandSchema` with \"/properties/user/properties/home_address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Data about the components comprising an address.</property-description>").optional()
}