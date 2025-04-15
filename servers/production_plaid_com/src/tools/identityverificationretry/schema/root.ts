import { z } from "zod"

export const inputParamsSchema = {
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the `/link/token/create` `client_user_id` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`."),
  "template_id": z.string().describe("ID of the associated Identity Verification template."),
  "strategy": z.enum(["reset","incomplete","infer","custom"]).describe("An instruction specifying what steps the new Identity Verification attempt should require the user to complete:\n\n\n`reset` - Restart the user at the beginning of the session, regardless of whether they successfully completed part of their previous session.\n\n`incomplete` - Start the new session at the step that the user failed in the previous session, skipping steps that have already been successfully completed.\n\n`infer` - If the most recent Identity Verification attempt associated with the given `client_user_id` has a status of `failed` or `expired`, retry using the `incomplete` strategy. Otherwise, use the `reset` strategy.\n\n`custom` - Start the new session with a custom configuration, specified by the value of the `steps` field\n\nNote:\n\nThe `incomplete` strategy cannot be applied if the session's failing step is `screening` or `risk_check`.\n\nThe `infer` strategy cannot be applied if the session's status is still `active`"),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>User information collected outside of Link, most likely via your own onboarding process.\n\nEach of the following identity fields are optional:\n\n`email_address`\n\n`phone_number`\n\n`date_of_birth`\n\n`name`\n\n`address`\n\n`id_number`\n\nSpecifically, these fields are optional in that they can either be fully provided (satisfying every required field in their subschema) or omitted from the request entirely by not providing the key or value.\nProviding these fields via the API will result in Link skipping the data collection process for the associated user. All verification steps enabled in the associated Identity Verification Template will still be run. Verification steps will either be run immediately, or once the user completes the `accept_tos` step, depending on the value provided to the `gave_consent` field.</property-description>").optional(),
  "steps": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `steps` to the tool, first call the tool `expandSchema` with \"/properties/steps\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Instructions for the `custom` retry strategy specifying which steps should be required or skipped.\n\n\nNote:\n\n\nThis field must be provided when the retry strategy is `custom` and must be omitted otherwise.\n\nCustom retries override settings in your Plaid Template. For example, if your Plaid Template has `verify_sms` disabled, a custom retry with `verify_sms` enabled will still require the step.\n\nThe `selfie_check` step is currently not supported on the sandbox server. Sandbox requests will silently disable the `selfie_check` step when provided.</property-description>").optional(),
  "is_shareable": z.boolean().nullable().describe("A flag specifying whether you would like Plaid to expose a shareable URL for the verification being retried. If a value for this flag is not specified, the `is_shareable` setting from the original verification attempt will be used.").optional(),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional()
}