import { z } from "zod"

export const inputParamsSchema = {
  "days_requested": z.number().int().describe("How many days of data to include in the refresh. If not specified, this will default to the days requested in the most recently generated bank income report for the user.").optional()
}