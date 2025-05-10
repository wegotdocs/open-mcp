import { z } from "zod"

export const inputParamsSchema = {
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional(),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional()
}