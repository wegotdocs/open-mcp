import { z } from "zod"

export const inputParamsSchema = {
  "num_protocols": z.number().int().describe("The number of top protocols to return. Default to 10.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the revenue was earned. Can be 'day', 'week', or 'month'. Defaults to 'month'.").optional(),
  "chain": z.string().describe("Name of the blockchain or L2 to filter protocol revenue by.").optional()
}