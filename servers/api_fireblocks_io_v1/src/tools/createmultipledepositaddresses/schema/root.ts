import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.number().int().describe("Existing Vault account ID to add deposit addresses to"),
  "assetId": z.string().describe("asset ID"),
  "count": z.number().int().describe("Count of deposit addresses to issue"),
  "descriptions": z.array(z.string()).describe("Desctiptions of the newly created addresses").optional(),
  "vaultAccountToCopyDescFrom": z.number().int().describe("Existing Vault Account ID to copy deposit addresses descriptions from in case no descriptions were provided").optional(),
  "vaultAccountToCopyDescFromIndex": z.number().int().describe("Existing length within the vault account to copy deposit addresses descriptions from").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}