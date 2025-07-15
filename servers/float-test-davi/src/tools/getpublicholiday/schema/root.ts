import { z } from "zod"

export const inputParamsSchema = {
  "public_holiday_id": z.number().int().describe("The public holiday's ID"),
  "year": z.string().describe("Returns all results in the given year in format YYYY. Default if omitted is the current year. Overridden by `start_date` and `end_date` parameters").optional(),
  "start_date": z.string().describe("Start of date range in format YYYY-MM-DD. Must be used together with `end_date`").optional(),
  "end_date": z.string().describe("End of date range in format YYYY-MM-DD. Must be used together with `start_date`").optional()
}