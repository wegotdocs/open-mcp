import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "target_access_token": z.string().describe("Access token for the target Item, typically provided in the Import Item response. "),
  "target_account_id": z.string().describe("Plaid Account ID that specifies the target bank account. This account will become the recipient for a user's direct deposit."),
  "country_code": z.enum(["US","CA"]).nullable().describe("ISO-3166-1 alpha-2 country code standard.").optional()
}