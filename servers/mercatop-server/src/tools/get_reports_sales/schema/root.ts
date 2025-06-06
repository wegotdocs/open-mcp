import { z } from "zod"

export const inputParamsSchema = {
  "context": z.literal("view").describe("Scope under which the request is made; determines fields present in response.").optional(),
  "period": z.enum(["week","month","last_month","year"]).describe("Report period.").optional(),
  "date_min": z.string().date().describe("Return sales for a specific start date, the date need to be in the YYYY-MM-DD format.").optional(),
  "date_max": z.string().date().describe("Return sales for a specific end date, the date need to be in the YYYY-MM-DD format.").optional()
}