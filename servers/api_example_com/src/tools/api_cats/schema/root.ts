import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().optional(),
  "skip": z.number().optional(),
  "tags": z.string().optional()
}