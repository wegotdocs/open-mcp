import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(0).optional(),
  "size": z.number().int().gte(1).optional(),
  "sort": z.array(z.string()).optional()
}