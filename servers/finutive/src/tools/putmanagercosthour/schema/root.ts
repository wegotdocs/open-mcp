import { z } from "zod"

export const inputParamsSchema = {
  "managerId": z.string(),
  "cost_hour": z.number().int().describe("cost_hour")
}