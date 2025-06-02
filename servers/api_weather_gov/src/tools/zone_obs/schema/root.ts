import { z } from "zod"

export const inputParamsSchema = {
  "start": z.string().datetime({ offset: true }).describe("Start date/time").optional(),
  "end": z.string().datetime({ offset: true }).describe("End date/time").optional(),
  "limit": z.number().int().gte(1).lte(500).describe("Limit").optional()
}