import { z } from "zod"

export const inputParamsSchema = {
  "num_chains": z.number().int().describe("The number of top gainers you want to see. Defaults to 5.").optional(),
  "min_tvl": z.number().describe("The minimum TVL that a chain should have to be included. Defaults to 10000.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the change occurred. Can be 'day', 'week', or 'month'. Defaults to 'week'.").optional()
}