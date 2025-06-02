import { z } from "zod"

export const inputParamsSchema = {
  "baseAssetId": z.string().describe("The blockchain base assetId"),
  "contractAddress": z.string().describe("The contract's onchain address"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}