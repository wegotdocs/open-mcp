import { z } from "zod"

export const inputParamsSchema = {
  "count": z.number().int().optional(),
  "did": z.string(),
  "page": z.number().int().optional()
}