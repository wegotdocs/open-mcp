import { z } from "zod"

export const inputParamsSchema = {
  "subscription_id": z.union([z.string(), z.null()]).describe("Azure subscription ID").optional(),
  "timeframe": z.string().describe("Cost timeframe: MonthToDate, LastMonth, etc").optional(),
  "granularity": z.string().describe("Cost granularity: Daily, Monthly").optional()
}