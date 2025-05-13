import { z } from "zod"

export const inputParamsSchema = {
  "rating": z.string().optional(),
  "comment": z.string().optional(),
  "contact": z.string().optional()
}