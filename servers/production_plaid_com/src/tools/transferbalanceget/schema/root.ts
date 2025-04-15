import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "type": z.enum(["prefunded_rtp_credits","prefunded_ach_credits"]).describe("The type of balance.\n\n`prefunded_rtp_credits` - Your prefunded RTP credit balance with Plaid\n`prefunded_ach_credits` - Your prefunded ACH credit balance with Plaid").optional()
}