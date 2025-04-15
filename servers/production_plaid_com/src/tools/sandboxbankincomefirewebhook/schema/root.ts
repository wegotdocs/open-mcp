import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "webhook_override": z.string().describe("The URL to which the webhook should be sent. If provided, this will override the URL set in the dashboard.").optional(),
  "webhook_code": z.enum(["BANK_INCOME_REFRESH_UPDATE","BANK_INCOME_REFRESH_COMPLETE"]).describe("The webhook codes this endpoint can be used to test"),
  "webhook_fields": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `webhook_fields` to the tool, first call the tool `expandSchema` with \"/properties/webhook_fields\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Optional fields which will be populated in the simulated webhook</property-description>")
}