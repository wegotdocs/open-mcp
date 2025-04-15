import { z } from "zod"

export const inputParamsSchema = {
  "dashboard_user_id": z.string().describe("ID of the associated user. To retrieve the email address or other details of the person corresponding to this id, use `/dashboard_user/get`."),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional()
}