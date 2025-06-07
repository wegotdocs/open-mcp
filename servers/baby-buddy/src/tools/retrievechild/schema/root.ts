import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string(),
  "id": z.string().describe("id").optional(),
  "first_name": z.string().describe("first_name").optional(),
  "last_name": z.string().describe("last_name").optional(),
  "q_slug": z.string().describe("slug").optional(),
  "birth_date": z.string().describe("birth_date").optional(),
  "birth_time": z.string().describe("birth_time").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional()
}