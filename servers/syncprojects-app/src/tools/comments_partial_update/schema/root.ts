import { z } from "zod"

export const inputParams = {
  "id": z.string(),
  "b_id": z.number().int().readonly().optional(),
  "text": z.string().optional(),
  "song_time": z.string().nullable().optional(),
  "song_time_seconds": z.string().readonly().optional(),
  "assignee": z.number().int().nullable().optional(),
  "edited": z.boolean().readonly().optional(),
  "project": z.number().int().nullable().optional(),
  "song": z.number().int().nullable().optional(),
  "posted_date": z.string().datetime({ offset: true }).readonly().optional(),
  "requires_resolution": z.boolean().optional(),
  "resolved": z.boolean().optional(),
  "parent": z.number().int().nullable().optional()
}