import { z } from "zod"

export const inputParamsSchema = {
  "level1": z.array(z.string()).optional(),
  "level2": z.array(z.string()).optional(),
  "level3": z.array(z.string()).optional()
}