import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().readonly().optional(),
  "first_name": z.string().max(255),
  "last_name": z.string().max(255).optional(),
  "birth_date": z.string().date(),
  "birth_time": z.string().nullable().optional(),
  "slug": z.string().regex(new RegExp("^[-\\w]+\\z")).readonly().optional(),
  "picture": z.string().base64().nullable().optional()
}