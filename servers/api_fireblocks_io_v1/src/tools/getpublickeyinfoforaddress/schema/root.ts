import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.string(),
  "assetId": z.string(),
  "change": z.number(),
  "addressIndex": z.number(),
  "compressed": z.boolean().optional()
}