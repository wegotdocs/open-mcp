import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().date().describe("The earliest date for which to fetch statements history. Dates should be formatted as YYYY-MM-DD."),
  "end_date": z.string().date().describe("The most recent date for which to fetch statements history. Dates should be formatted as YYYY-MM-DD.")
}