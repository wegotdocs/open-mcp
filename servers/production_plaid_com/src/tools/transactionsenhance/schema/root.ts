import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.string().describe("Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.").optional(),
  "secret": z.string().describe("Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.").optional(),
  "account_type": z.string().describe("The type of account for the requested transactions (`depository` or `credit`)."),
  "transactions": z.array(z.object({ "id": z.string().describe("A unique ID for the transaction used to help you tie data back to your systems."), "description": z.string().describe("The raw description of the transaction."), "amount": z.number().describe("The value of the transaction with direction. (NOTE: this will affect enrichment results, so directions are important):.\n  Negative (-) for credits (e.g., incoming transfers, refunds)\n  Positive (+) for debits (e.g., purchases, fees, outgoing transfers)"), "iso_currency_code": z.string().describe("The ISO-4217 currency code of the transaction e.g. USD.") }).catchall(z.any()).describe("A client-provided transaction for Plaid to enhance.")).describe("An array of raw transactions to be enhanced.")
}