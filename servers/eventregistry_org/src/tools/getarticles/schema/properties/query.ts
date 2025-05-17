import { z } from "zod"

export const inputParamsSchema = {
  "conceptUri": z.array(z.string()).optional(),
  "sourceUri": z.array(z.string()).optional(),
  "sourceLocationUri": z.array(z.string()).optional(),
  "locationUri": z.array(z.string()).optional()
}