import { z } from "zod"

export const inputParamsSchema = {
  "time_period": z.enum(["day","week"]).describe("The time period for which to retrieve data. Can be day or week.").optional()
}