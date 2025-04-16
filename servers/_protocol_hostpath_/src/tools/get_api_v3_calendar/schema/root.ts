import { z } from "zod"

export const inputParamsSchema = {
  "start": z.string().datetime({ offset: true }).optional(),
  "end": z.string().datetime({ offset: true }).optional(),
  "unmonitored": z.boolean().optional(),
  "tags": z.string().optional()
}