import { z } from "zod"

export const inputParamsSchema = {
  "type": z.literal("Point").describe("The geometry type").optional(),
  "coordinates": z.array(z.number()).min(2).max(2).optional()
}