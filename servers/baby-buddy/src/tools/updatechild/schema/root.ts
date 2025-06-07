import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string(),
  "id": z.string().describe("id").optional(),
  "first_name": z.string().describe("first_name").optional(),
  "last_name": z.string().describe("last_name").optional(),
  "q_slug": z.string().describe("slug").optional(),
  "birth_date": z.string().describe("birth_date").optional(),
  "birth_time": z.string().describe("birth_time").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional(),
  "b_id": z.number().int().readonly().optional(),
  "b_first_name": z.string().max(255),
  "b_last_name": z.string().max(255).optional(),
  "b_birth_date": z.string().date(),
  "b_birth_time": z.string().nullable().optional(),
  "b_slug": z.string().regex(new RegExp("^[-\\w]+\\z")).readonly().optional(),
  "picture": z.string().base64().nullable().optional()
}