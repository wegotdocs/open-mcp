import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "transfer_id": z.string().describe("Plaid’s unique identifier for a transfer."),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. If provided, the event to be simulated is created at the `virtual_time` on the provided `test_clock`.").optional(),
  "event_type": z.string().describe("The asynchronous event to be simulated. May be: `posted`, `settled`, `failed`, `funds_available`, or `returned`.\n\nAn error will be returned if the event type is incompatible with the current transfer status. Compatible status --> event type transitions include:\n\n`pending` --> `failed`\n\n`pending` --> `posted`\n\n`posted` --> `returned`\n\n`posted` --> `settled`\n\n`settled` --> `funds_available` (only applicable to ACH debits.)\n"),
  "failure_reason": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `failure_reason` to the tool, first call the tool `expandSchema` with \"/properties/failure_reason\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The failure reason if the event type for a transfer is `\"failed\"` or `\"returned\"`. Null value otherwise.</property-description>").optional(),
  "webhook": z.string().describe("The webhook URL to which a `TRANSFER_EVENTS_UPDATE` webhook should be sent.").optional()
}