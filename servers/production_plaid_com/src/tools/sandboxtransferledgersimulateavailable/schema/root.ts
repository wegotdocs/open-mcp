import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "ledger_id": z.string().nullable().describe("Specify which ledger balance to simulate converting pending balance to available balance. If this field is left blank, this will default to id of the default ledger balance.").optional(),
  "test_clock_id": z.string().nullable().describe("Plaid’s unique identifier for a test clock. If provided, only the pending balance that is due before the `virtual_timestamp` on the test clock will be converted.").optional(),
  "webhook": z.string().describe("The webhook URL to which a `TRANSFER_EVENTS_UPDATE` webhook should be sent.").optional()
}