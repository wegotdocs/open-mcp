import { z } from "zod"

export const inputParamsSchema = {
  "defillamaId": z.string().describe("The DefiLlamaID of the protocol"),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the fees were collected. Can be 'day', 'week', or 'month'. Defaults to 'month'.").optional()
}