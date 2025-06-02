import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.string().describe("The ID of the vault account"),
  "assetId": z.string().describe("The ID of the asset"),
  "addressId": z.string().describe("The address for which to add a description. For XRP, use <address>:<tag>, for all other assets, use only the address"),
  "description": z.string().describe("The address description").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}