import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Find Department by name").optional(),
  "limit": z.number().int().describe("Limit departments").optional(),
  "page": z.number().int().describe("Request a specific page").optional(),
  "orderBy": z.string().describe("field1 asc, field2 desc").optional()
}