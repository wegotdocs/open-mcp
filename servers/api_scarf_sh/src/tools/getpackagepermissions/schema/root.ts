import { z } from "zod"

export const inputParamsSchema = {
  "per_page": z.number().int().optional(),
  "after": z.string().optional()
}