import { z } from "zod"

export const inputParamsSchema = {
  "calendar_id": z.number().int().nullable().optional(),
  "event_id": z.number().int().nullable().optional(),
  "date": z.string(),
  "comment": z.string().optional(),
  "is_private": z.boolean().optional()
}