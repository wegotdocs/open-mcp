import { z } from "zod"

export const inputParamsSchema = {
  "starting_page": z.number().int().optional(),
  "page_size": z.number().int().optional(),
  "ids": z.array(z.string()).optional(),
  "thread": z.number().int().optional(),
  "batch": z.boolean().optional(),
  "instanceIdOverwritten": z.number().int().optional()
}