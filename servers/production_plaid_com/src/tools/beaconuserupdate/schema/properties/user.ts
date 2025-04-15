import { z } from "zod"

export const inputParamsSchema = {
  "date_of_birth": z.string().date().describe("A date in the format YYYY-MM-DD (RFC 3339 Section 5.6).").optional(),
  "name": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `name` to the tool, first call the tool `expandSchema` with \"/properties/user/properties/name\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The full name for a given Beacon User.</property-description>").optional(),
  "address": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `address` to the tool, first call the tool `expandSchema` with \"/properties/user/properties/address\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Home address for the associated user. For more context on this field, see [Input Validation by Country](https://plaid.com/docs/identity-verification/hybrid-input-validation/#input-validation-by-country).</property-description>").optional(),
  "email_address": z.string().email().describe("A valid email address. Must not have leading or trailing spaces and address must be RFC compliant. For more information, see [RFC 3696](https://datatracker.ietf.org/doc/html/rfc3696).").optional(),
  "phone_number": z.string().nullable().describe("A phone number in E.164 format.").optional(),
  "id_number": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `id_number` to the tool, first call the tool `expandSchema` with \"/properties/user/properties/id_number\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The ID number associated with a Beacon User.</property-description>").optional(),
  "ip_address": z.string().nullable().describe("An IPv4 or IPV6 address.").optional(),
  "depository_accounts": z.array(z.object({ "account_number": z.string().describe("Must be a valid US Bank Account Number"), "routing_number": z.string().describe("The routing number of the account.") }).catchall(z.any()).describe("Depository account information for the associated user.")).optional()
}