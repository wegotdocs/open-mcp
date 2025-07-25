import { z } from "zod"

export const inputParamsSchema = {
  "after": z.string().optional(),
  "per_page": z.number().int().optional()
}