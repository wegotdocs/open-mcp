import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.string(),
  "assetId": z.string(),
  "change": z.number().describe("BIP44 derivation path - change value"),
  "addressIndex": z.number().describe("BIP44 derivation path - index value"),
  "compressed": z.boolean().describe("Compressed/Uncompressed public key format").optional()
}