import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.string().describe("The ID of the vault account to return"),
  "assetId": z.string().describe("The ID of the asset"),
  "description": z.string().describe("(Optional) Attach a description to the new address").optional(),
  "customerRefId": z.string().describe("Optional - Sets a customer reference ID").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}