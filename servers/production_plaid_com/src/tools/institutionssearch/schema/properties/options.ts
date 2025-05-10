import { z } from "zod"

export const inputParamsSchema = {
  "oauth": z.boolean().nullable().describe("Limit results to institutions with or without OAuth login flows. Note that institutions will have `oauth` set to `true` if some Items associated with that institution are required to use OAuth flows; institutions in a state of migration to OAuth will have the `oauth` attribute set to `true`.").optional(),
  "include_optional_metadata": z.boolean().describe("When true, return the institution's homepage URL, logo and primary brand color.").optional(),
  "include_auth_metadata": z.boolean().nullable().describe("When `true`, returns metadata related to the Auth product indicating which auth methods are supported.").optional(),
  "include_payment_initiation_metadata": z.boolean().nullable().describe("When `true`, returns metadata related to the Payment Initiation product indicating which payment configurations are supported.").optional(),
  "payment_initiation": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `payment_initiation` to the tool, first call the tool `expandSchema` with \"/properties/options/properties/payment_initiation\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional options that will be used to filter institutions by various Payment Initiation configurations.</property-description>").optional()
}