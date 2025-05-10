import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().date().describe("The earliest date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD.").optional(),
  "end_date": z.string().date().describe("The most recent date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD.").optional(),
  "days_requested": z.number().int().gte(1).lte(730).describe("The maximum number of days of transaction history to request for the Transactions product.").optional()
}