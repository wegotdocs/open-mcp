import { z } from "zod"

export const inputParamsSchema = {
  "count": z.number().gte(1).lte(500).describe("Count of objects to return").optional(),
  "offset": z.number().gte(0).describe("Offset of objects to return").optional()
}