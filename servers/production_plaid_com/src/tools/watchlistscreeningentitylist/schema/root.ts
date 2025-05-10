import { z } from "zod"

export const inputParamsSchema = {
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "entity_watchlist_program_id": z.string().describe("ID of the associated entity program."),
  "client_user_id": z.string().describe("A unique ID that identifies the end user in your system. This ID can also be used to associate user-specific data from other Plaid products. Financial Account Matching requires this field and the `/link/token/create` `client_user_id` to be consistent. Personally identifiable information, such as an email address or phone number, should not be used in the `client_user_id`.").optional(),
  "status": z.enum(["rejected","pending_review","cleared"]).describe("A status enum indicating whether a screening is still pending review, has been rejected, or has been cleared.").optional(),
  "assignee": z.string().describe("ID of the associated user. To retrieve the email address or other details of the person corresponding to this id, use `/dashboard_user/get`.").optional(),
  "cursor": z.string().nullable().describe("An identifier that determines which page of results you receive.").optional()
}