import { z } from "zod"

export const inputParamsSchema = {
  "namePrefix": z.string().optional(),
  "nameSuffix": z.string().optional(),
  "minAmountThreshold": z.number().describe("Specifying minAmountThreshold will filter accounts with balances greater than this value, otherwise, it will return all accounts.").optional(),
  "assetId": z.string().optional(),
  "orderBy": z.enum(["ASC","DESC"]).optional(),
  "before": z.string().optional(),
  "after": z.string().optional(),
  "limit": z.number().gte(1).lte(500).optional()
}