import { z } from "zod"

export const inputParamsSchema = {
  "start_date": z.string().date().describe("Start date of the Leave"),
  "end_date": z.string().date().describe("End date of the Leave"),
  "starts_at_midday": z.boolean().describe("Whether the Leave starts at midday").optional(),
  "ends_at_midday": z.boolean().describe("Whether the Leave ends at midday").optional(),
  "user": z.string(),
  "category": z.union([z.string(), z.null()]).describe("Category of the Leave (created if not existing)").optional()
}