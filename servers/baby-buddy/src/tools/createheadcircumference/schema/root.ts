import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly().optional(),
  "child": z.number().int(),
  "head_circumference": z.number(),
  "date": z.string().date().optional(),
  "notes": z.string().nullable().optional(),
  "tags": z.array(z.string()).optional()
}