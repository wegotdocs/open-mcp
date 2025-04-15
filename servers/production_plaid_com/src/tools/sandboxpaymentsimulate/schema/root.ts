import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "payment_id": z.string().describe("The ID of the payment to simulate"),
  "status": z.string().describe("The status to set the payment to.\n\nValid statuses include:\n- `PAYMENT_STATUS_INITIATED`\n- `PAYMENT_STATUS_INSUFFICIENT_FUNDS`\n- `PAYMENT_STATUS_FAILED`\n- `PAYMENT_STATUS_EXECUTED`\n- `PAYMENT_STATUS_SETTLED`\n- `PAYMENT_STATUS_CANCELLED`\n- `PAYMENT_STATUS_REJECTED`")
}