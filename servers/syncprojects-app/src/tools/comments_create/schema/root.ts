import { z } from "zod"

export const inputParams = {
  "id": z.number().int().readonly(),
  "text": z.string(),
  "song_time": z.string().nullable().optional(),
  "song_time_seconds": z.string().readonly(),
  "assignee": z.number().int().nullable().optional(),
  "edited": z.boolean().readonly(),
  "project": z.number().int().nullable().optional(),
  "song": z.number().int().nullable().optional(),
  "posted_date": z.string().datetime({ offset: true }).readonly(),
  "requires_resolution": z.boolean().optional(),
  "resolved": z.boolean().optional(),
  "parent": z.number().int().nullable().optional()
}