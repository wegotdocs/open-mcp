import { z } from "zod"

export const inputParamsSchema = {
  "is_default": z.boolean().optional(),
  "is_platform_default": z.boolean().optional()
}