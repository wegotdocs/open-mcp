import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().optional(),
  "top": z.boolean().optional()
}