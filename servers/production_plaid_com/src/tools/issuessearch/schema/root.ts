import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "item_id": z.string().describe("A unique identifier for the Plaid Item.").optional(),
  "link_session_id": z.string().describe("A unique identifier for the Link session.").optional(),
  "link_session_request_id": z.string().describe("The `request_id` for the Link session that might have had an institution connection issue.").optional()
}