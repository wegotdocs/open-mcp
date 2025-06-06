import { z } from "zod"

export const inputParamsSchema = {
  "per_page": z.number().int().optional(),
  "last_evaluated_key": z.union([z.string(), z.null()]).optional(),
  "reverse": z.boolean().optional(),
  "field": z.union([z.string(), z.null()]).optional()
}