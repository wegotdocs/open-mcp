import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "start_virtual_time": z.string().datetime({ offset: true }).nullable().describe("The start virtual timestamp of test clocks to return. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)").optional(),
  "end_virtual_time": z.string().datetime({ offset: true }).nullable().describe("The end virtual timestamp of test clocks to return. This should be in RFC 3339 format (i.e. `2019-12-06T22:35:49Z`)").optional(),
  "count": z.number().int().gte(1).lte(25).nullable().describe("The maximum number of test clocks to return.").optional(),
  "offset": z.number().int().gte(0).describe("The number of test clocks to skip before returning results.").optional()
}