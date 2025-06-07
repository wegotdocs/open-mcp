import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly().optional(),
  "child": z.number().int(),
  "temperature": z.number(),
  "time": z.string().datetime({ offset: true }).optional(),
  "notes": z.string().nullable().optional(),
  "tags": z.array(z.string()).optional()
}