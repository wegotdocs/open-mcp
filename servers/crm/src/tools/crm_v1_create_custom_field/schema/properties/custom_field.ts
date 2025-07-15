import { z } from "zod"

export const inputParamsSchema = {
  "allow_new": z.boolean().optional(),
  "for": z.string().optional(),
  "label": z.string().optional(),
  "opts": z.array(z.string()).optional(),
  "order": z.number().optional(),
  "required": z.boolean().optional(),
  "type": z.string().optional(),
  "unique": z.boolean().optional()
}