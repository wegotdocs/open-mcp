import { z } from "zod"

export const inputParamsSchema = {
  "vaultAccountId": z.string().describe("The ID of the vault account to return"),
  "assetId": z.string().describe("The ID of the asset"),
  "limit": z.number().optional(),
  "before": z.string().optional(),
  "after": z.string().optional()
}