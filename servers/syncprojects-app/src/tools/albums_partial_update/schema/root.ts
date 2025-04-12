import { z } from "zod"

export const inputParams = {
  "id": z.string(),
  "b_id": z.number().int().readonly().optional(),
  "name": z.string().max(100).optional(),
  "cover": z.string().url().nullable().optional(),
  "released": z.boolean().optional(),
  "release_date": z.string().date().nullable().describe("If the album is not released yet, this can be used to specify the estimated release date. YYYY-MM-DD").optional(),
  "project": z.number().int().optional()
}