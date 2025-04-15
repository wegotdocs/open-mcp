import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "client_user_id": z.string().min(1).max(128).describe("A unique ID representing the end user. Maximum of 128 characters. Typically this will be a user ID number from your application. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`."),
  "end_customer": z.string().min(0).max(128).describe("A unique ID representing a CRA reseller's end customer. Maximum of 128 characters.").optional(),
  "consumer_report_user_identity": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `consumer_report_user_identity` to the tool, first call the tool `expandSchema` with \"/properties/consumer_report_user_identity\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>To create a Plaid Check Consumer Report for a user, this field must be present on the user token. If this field is not provided during user token creation, you can add it to the user later by calling `/user/update`. Once the field has been added to the user, you will be able to call `/link/token/create` with a non-empty `consumer_report_permissible_purpose` (which will automatically create a Plaid Check Consumer Report), or call `/cra/check_report/create` for that user.</property-description>").optional()
}