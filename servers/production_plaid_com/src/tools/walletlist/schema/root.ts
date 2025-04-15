import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "iso_currency_code": z.enum(["GBP","EUR"]).describe("An ISO-4217 currency code, used with e-wallets and transactions.").optional(),
  "cursor": z.string().max(1024).describe("A base64 value representing the latest e-wallet that has already been requested. Set this to `next_cursor` received from the previous `/wallet/list` request. If provided, the response will only contain e-wallets created before that e-wallet. If omitted, the response will contain e-wallets starting from the most recent, and in descending order.").optional(),
  "count": z.number().int().gte(1).lte(20).describe("The number of e-wallets to fetch").optional()
}