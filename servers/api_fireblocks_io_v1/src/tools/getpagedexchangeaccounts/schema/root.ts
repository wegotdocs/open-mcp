import { z } from "zod"

export const inputParamsSchema = {
  "before": z.string().optional(),
  "after": z.string().optional(),
  "limit": z.number().gte(1).lte(5).describe("number of exchanges per page")
}