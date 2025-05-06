import { z } from "zod"

export const inputParamsSchema = {
  "target_id": z.number().int(),
  "relation": z.string(),
  "attitude": z.number().int().gte(-100).lte(100).optional(),
  "color": z.string().nullable().optional(),
  "is_private": z.boolean().optional()
}