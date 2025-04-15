import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "test_clock_id": z.string().describe("Plaid’s unique identifier for a test clock."),
  "new_virtual_time": z.string().datetime({ offset: true }).describe("The virtual timestamp on the test clock. This will be of the form `2006-01-02T15:04:05Z`.")
}