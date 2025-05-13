import { z } from "zod"

export const inputParamsSchema = {
  "stockAbnormalAutoCreateAdjustmentOrder": z.boolean().optional(),
  "adjustmentOrderAutoCompleteAdjustment": z.boolean().optional(),
  "zeroStockSavedDays": z.number().int().optional()
}