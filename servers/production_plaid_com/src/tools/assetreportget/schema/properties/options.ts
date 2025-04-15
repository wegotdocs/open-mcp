import { z } from "zod"

export const inputParamsSchema = {
  "days_to_include": z.number().int().gte(0).lte(731).nullable().describe("The maximum number of days of history to include in the Asset Report.").optional()
}