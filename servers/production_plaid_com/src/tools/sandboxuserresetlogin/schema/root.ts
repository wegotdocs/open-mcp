import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "user_token": z.string().describe("The user token associated with the User data is being requested for."),
  "item_ids": z.array(z.string().describe("The `item_id` of the Item associated with this webhook, warning, or error")).nullable().describe("An array of `item_id`s associated with the User to be reset.  If empty or `null`, this field will default to resetting all Items associated with the User.").optional()
}