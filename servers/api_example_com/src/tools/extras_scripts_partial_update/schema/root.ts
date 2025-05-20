import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().regex(new RegExp("^[^/]+$")),
  "data": z.any().optional(),
  "commit": z.boolean().optional(),
  "schedule_at": z.string().datetime({ offset: true }).nullable().optional(),
  "interval": z.number().int().nullable().optional()
}