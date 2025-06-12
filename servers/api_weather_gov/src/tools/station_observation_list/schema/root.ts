import { z } from "zod"

export const inputParamsSchema = {
  "start": z.string().datetime({ offset: true }).describe("Start time").optional(),
  "end": z.string().datetime({ offset: true }).describe("End time").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limit").optional()
}