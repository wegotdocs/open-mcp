import { z } from "zod"

export const inputParamsSchema = {
  "confirmed_hits": z.array(z.string().describe("ID of the associated screening hit.")).describe("Hits to mark as a true positive after thorough manual review. These hits will never recur or be updated once dismissed. In most cases, confirmed hits indicate that the customer should be rejected."),
  "dismissed_hits": z.array(z.string().describe("ID of the associated screening hit.")).describe("Hits to mark as a false positive after thorough manual review. These hits will never recur or be updated once dismissed."),
  "comment": z.string().nullable().describe("A comment submitted by a team member as part of reviewing a watchlist screening.").optional(),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "watchlist_screening_id": z.string().describe("ID of the associated screening.")
}