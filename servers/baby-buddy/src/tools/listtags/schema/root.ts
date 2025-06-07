import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Number of results to return per page.").optional(),
  "offset": z.number().int().describe("The initial index from which to return the results.").optional(),
  "last_used": z.string().describe("last_used").optional(),
  "name": z.string().describe("name").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional()
}