import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of repayments to return (RFC 3339 format).").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of repayments to return (RFC 3339 format).").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of repayments to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of repayments to skip before returning results.").optional()
}