import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "count": z.number().int().gte(1).lte(200).nullable().describe("The maximum number of payments to return. If `count` is not specified, a maximum of 10 payments will be returned, beginning with the most recent payment before the cursor (if specified).").optional(),
  "cursor": z.string().datetime({ offset: true }).nullable().describe("A string in RFC 3339 format (i.e. \"2019-12-06T22:35:49Z\"). Only payments created before the cursor will be returned.").optional(),
  "consent_id": z.string().nullable().describe("The consent ID. If specified, only payments, executed using this consent, will be returned.").optional()
}