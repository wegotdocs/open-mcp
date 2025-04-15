import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "client_transaction_id": z.string().min(1).max(36).describe("Must be the same as the `client_transaction_id` supplied when calling `/signal/evaluate` or `/accounts/balance/get`."),
  "return_code": z.string().describe("Must be a valid ACH return code (e.g. \"R01\")\n\nIf formatted incorrectly, this will result in an [`INVALID_FIELD`](/docs/errors/invalid-request/#invalid_field) error."),
  "returned_at": z.string().datetime({ offset: true }).nullable().describe("Date and time when you receive the returns from your payment processors, in ISO 8601 format (`YYYY-MM-DDTHH:mm:ssZ`).").optional()
}