import { z } from "zod"

export const inputParamsSchema = {
  "days_requested": z.number().int().gte(1).lte(730).describe("Number of days of transaction history to request in the Cashflow Report product.").optional()
}