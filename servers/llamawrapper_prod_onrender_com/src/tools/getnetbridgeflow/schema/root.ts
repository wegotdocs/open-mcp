import { z } from "zod"

export const inputParamsSchema = {
  "chain": z.string().describe("Name of the chain or L2 to retrieve net bridge flow for."),
  "time_period": z.enum(["day","week","month"]).describe("Time period for net bridge flow calculation. Can be day, week or month.").optional()
}