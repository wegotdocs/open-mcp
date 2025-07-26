import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(255),
  "description": z.string().max(4000).nullable().optional(),
  "critical_product": z.boolean().optional(),
  "key_product": z.boolean().optional()
}