import { z } from "zod"

export const inputParamsSchema = {
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "access_token": z.string().describe("The access token associated with the Item data is being requested for."),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional()
}