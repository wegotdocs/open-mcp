import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(100),
  "description": z.string().min(1).max(200),
  "is_single": z.boolean().optional(),
  "is_active": z.boolean().optional(),
  "is_mandatory": z.boolean().optional()
}