import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Find office by name").optional(),
  "limit": z.number().int().describe("Limit offices").optional(),
  "page": z.number().int().describe("Request a specific page").optional(),
  "orderBy": z.string().describe("field1 asc, field2 desc").optional()
}