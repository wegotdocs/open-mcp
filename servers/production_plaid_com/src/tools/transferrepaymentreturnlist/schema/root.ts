import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "repayment_id": z.string().describe("Identifier of the repayment to query."),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of repayments to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of repayments to skip before returning results.").optional()
}