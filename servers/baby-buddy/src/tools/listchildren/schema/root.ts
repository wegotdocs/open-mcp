import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "id": z.string().describe("id").optional(),
  "first_name": z.string().describe("first_name").optional(),
  "last_name": z.string().describe("last_name").optional(),
  "slug": z.string().describe("slug").optional(),
  "birth_date": z.string().describe("birth_date").optional(),
  "birth_time": z.string().describe("birth_time").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional()
}