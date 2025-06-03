import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().gte(0).optional(),
  "offset": z.number().int().optional()
}