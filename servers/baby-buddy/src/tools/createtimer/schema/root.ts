import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly().optional(),
  "child": z.number().int().nullable().optional(),
  "name": z.string().max(255).nullable().optional(),
  "start": z.string().datetime({ offset: true }).optional(),
  "duration": z.string().readonly().optional(),
  "user": z.number().int().nullable().optional()
}