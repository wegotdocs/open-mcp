import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string().optional(),
  "default_templates": z.boolean().optional()
}