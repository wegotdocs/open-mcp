import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "originator_client_id": z.string().describe("The client ID of the originator"),
  "tos_acceptance_metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `tos_acceptance_metadata` to the tool, first call the tool `expandSchema` with \"/properties/tos_acceptance_metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Metadata related to the acceptance of Terms of Service</property-description>"),
  "originator_reviewed_at": z.string().datetime({ offset: true }).describe("ISO8601 timestamp indicating the most recent time the platform collected onboarding data from the originator"),
  "webhook": z.string().describe("The webhook URL to which a `PLATFORM_ONBOARDING_UPDATE` webhook should be sent.").optional()
}