import { z } from "zod"

export const inputParamsSchema = {
  "period": z.enum(["week","month","last_month","year"]).describe("Report period. Default is today's date. Options: week, month, last_month and year").optional(),
  "date_min": z.string().describe("Return sales for a specific start date, the date need to be in the YYYY-MM-DD format.").optional(),
  "date_max": z.string().describe("Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.").optional()
}