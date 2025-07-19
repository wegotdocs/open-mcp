import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "search": z.string().optional(),
  "limit": z.number().int().optional()
}