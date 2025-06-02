import { z } from "zod"

export const inputParamsSchema = {
  "txId": z.string().describe("The ID of the transaction to unfreeze"),
  "X-End-User-Wallet-Id": z.string().uuid().describe("Unique ID of the End-User wallet to the API request. Required for end-user wallet operations.").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}