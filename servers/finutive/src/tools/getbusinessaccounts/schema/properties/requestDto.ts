import { z } from "zod"

export const inputParamsSchema = {
  "status": z.boolean().optional(),
  "bank": z.string().optional()
}