import { z } from "zod"

export const inputParamsSchema = {
  "exchangeAccountId": z.string().describe("The ID of the exchange account. Please make sure the exchange supports conversions. To find the ID of your exchange account, use GET/exchange_accounts."),
  "srcAsset": z.string().describe("Name of the source asset (must be in a currency that is supported for conversions in the selected exchange type that corresponds to your exchange ID)"),
  "destAsset": z.string().describe("Name of the destination asset (must be in a currency that is supported for conversions in the selected exchange type that corresponds to your exchange ID)"),
  "amount": z.number().describe("The amount to transfer (in the currency of the source asset)"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}