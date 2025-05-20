import { z } from "zod"

export const inputParamsSchema = {
  "app_label": z.string().optional(),
  "id": z.number().int().optional(),
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "model": z.string().optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional(),
  "q": z.string().describe("Search").optional()
}