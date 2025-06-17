import { z } from "zod"

export const inputParamsSchema = {
  "first": z.number().int().optional(),
  "last": z.number().int().optional(),
  "after": z.string().optional(),
  "before": z.string().optional(),
  "from_date": z.string().optional(),
  "to_date": z.string().optional(),
  "actor": z.array(z.any()).optional(),
  "search": z.string().optional(),
  "type": z.array(z.any()).optional(),
  "severity": z.array(z.any()).optional()
}