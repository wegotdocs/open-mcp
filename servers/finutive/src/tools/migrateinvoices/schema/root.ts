import { z } from "zod"

export const inputParamsSchema = {
  "starting_page": z.number().int().optional(),
  "page_size": z.number().int().optional(),
  "thread": z.number().int().optional(),
  "batch": z.boolean().optional()
}