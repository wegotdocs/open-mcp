import { z } from "zod"

export const inputParamsSchema = {
  "first_name": z.string().describe("The user's first name"),
  "last_name": z.string().describe("The user's last name"),
  "phone_numbers": z.array(z.string()).describe("The user's phone number, in E.164 format: +{countrycode}{number}. For example: \"+14157452130\". Phone numbers provided in other formats will be parsed on a best-effort basis. Phone number input is validated against valid number ranges; number strings that do not match a real-world phone numbering scheme may cause the request to fail, even in the Sandbox test environment."),
  "emails": z.array(z.string()).describe("The user's emails"),
  "ssn_last_4": z.string().min(4).max(4).nullable().describe("The last 4 digits of the user's social security number.").optional(),
  "date_of_birth": z.string().date().nullable().describe("To be provided in the format \"yyyy-mm-dd\".\nThis field is required for all Plaid Check customers."),
  "primary_address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `primary_address` to the tool, first call the tool `expandSchema` with \"/properties/consumer_report_user_identity/properties/primary_address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Data about the components comprising an address.</property-description>")
}