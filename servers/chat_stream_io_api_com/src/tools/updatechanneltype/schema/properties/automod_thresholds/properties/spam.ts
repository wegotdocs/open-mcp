import { z } from "zod"

export const inputParamsSchema = {
  "block": z.number().gte(0).lte(1).describe("Threshold for automatic message block").optional(),
  "flag": z.number().gte(0).lte(1).describe("Threshold for automatic message flag").optional()
}