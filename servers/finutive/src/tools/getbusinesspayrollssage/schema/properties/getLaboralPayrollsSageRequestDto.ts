import { z } from "zod"

export const inputParamsSchema = {
  "size": z.number().int().optional(),
  "page": z.number().int().optional(),
  "date": z.string().optional(),
  "sort": z.string().optional()
}