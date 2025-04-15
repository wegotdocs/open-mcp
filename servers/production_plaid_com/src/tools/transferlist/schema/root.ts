import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start datetime of transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end datetime of transfers to list. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)").optional(),
  "count": z.number().int().gte(1).lte(25).describe("The maximum number of transfers to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of transfers to skip before returning results.").optional(),
  "originator_client_id": z.string().nullable().describe("Filter transfers to only those with the specified originator client.").optional(),
  "funding_account_id": z.string().nullable().describe("Filter transfers to only those with the specified `funding_account_id`.").optional()
}