import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(1).lte(100).optional(),
  "offset": z.number().int().gte(0).optional()
}