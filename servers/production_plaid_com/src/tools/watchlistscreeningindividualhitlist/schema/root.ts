import { z } from "zod"

export const inputParamsSchema = {
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "watchlist_screening_id": z.string().describe("ID of the associated screening."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}