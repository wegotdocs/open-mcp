import { z } from "zod"

export const inputParamsSchema = {
  "count": z.number().int().gte(1).lte(100).describe("Number of commits to retrieve").optional()
}