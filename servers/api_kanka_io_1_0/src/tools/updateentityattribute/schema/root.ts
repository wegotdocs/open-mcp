import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string(),
  "value": z.string(),
  "is_private": z.boolean().optional(),
  "is_star": z.boolean().optional(),
  "default_order": z.number().int().optional()
}