import { z } from "zod"

export const inputParamsSchema = {
  "beacon_user_id": z.string().describe("ID of the associated Beacon User."),
  "status": z.enum(["rejected","pending_review","cleared"]).describe("A status of a Beacon User.\n\n`rejected`: The Beacon User has been rejected for fraud. Users can be automatically or manually rejected.\n\n`pending_review`: The Beacon User has been marked for review.\n\n`cleared`: The Beacon User has been cleared of fraud."),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional()
}