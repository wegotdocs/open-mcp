import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "access_token": z.string().describe("The Plaid `access_token` for the account that will be debited or credited."),
  "account_id": z.string().describe("The Plaid `account_id` corresponding to the end-user account that will be debited or credited."),
  "payment_profile_token": z.string().describe("A payment profile token associated with the Payment Profile data that is being requested.").optional()
}