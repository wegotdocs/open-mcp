import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "page_size": z.number().int().optional()
}