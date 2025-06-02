import { z } from "zod"

export const inputParamsSchema = {
  "assetId": z.string().describe("The ID of the asset"),
  "gasThreshold": z.string().describe("The Gas Station will initiate a fueling transaction when the vault account's balance falls below the gasThreshold value").optional(),
  "gasCap": z.string().describe("The Gas Station will top up the vault account with gas until the balance reaches the gasCap value").optional(),
  "maxGasPrice": z.string().nullable().describe("Maximum gas price for the fueling transaction (in gwei)").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}