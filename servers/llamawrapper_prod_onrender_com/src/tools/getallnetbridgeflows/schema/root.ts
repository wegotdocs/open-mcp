import { z } from "zod"

export const inputParamsSchema = {
  "time_period": z.enum(["day","week","month"]).describe("Time period for net bridge flow calculation. Can be day, week or month.").optional()
}