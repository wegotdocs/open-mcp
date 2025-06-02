import { z } from "zod"

export const inputParamsSchema = {
  "contractId": z.string().describe("The ID of the contract"),
  "assetId": z.string().describe("The ID of the asset to add"),
  "address": z.string().describe("The contract's address (or xpub) of the wallet"),
  "tag": z.string().describe("The destination tag, for XRP wallets").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}