import { z } from "zod"

export const inputParamsSchema = {
  "namePrefix": z.string().optional(),
  "nameSuffix": z.string().optional(),
  "minAmountThreshold": z.number().optional(),
  "assetId": z.string().optional()
}