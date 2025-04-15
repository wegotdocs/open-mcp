import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "bank_transfer_id": z.string().describe("Plaid’s unique identifier for a bank transfer."),
  "event_type": z.string().describe("The asynchronous event to be simulated. May be: `posted`, `failed`, or `reversed`.\n\nAn error will be returned if the event type is incompatible with the current transfer status. Compatible status --> event type transitions include:\n\n`pending` --> `failed`\n\n`pending` --> `posted`\n\n`posted` --> `reversed`\n"),
  "failure_reason": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `failure_reason` to the tool, first call the tool `expandSchema` with \"/properties/failure_reason\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The failure reason if the type of this transfer is `\"failed\"` or `\"reversed\"`. Null value otherwise.</property-description>").optional()
}