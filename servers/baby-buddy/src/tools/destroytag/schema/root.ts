import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string(),
  "last_used": z.string().describe("last_used").optional(),
  "name": z.string().describe("name").optional(),
  "ordering": z.string().describe("Which field to use when ordering the results.").optional()
}