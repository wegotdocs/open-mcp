import { z } from "zod"

export const inputParamsSchema = {
  "walletId": z.string().describe("The ID of the Non-Custodial wallet"),
  "accountId": z.string().describe("The ID of the account"),
  "assetId": z.string().describe("The ID of the asset"),
  "change": z.number().describe("BIP44 derivation path - change value"),
  "addressIndex": z.number().describe("BIP44 derivation path - index value"),
  "compressed": z.boolean().describe("Compressed/Uncompressed public key format").optional()
}