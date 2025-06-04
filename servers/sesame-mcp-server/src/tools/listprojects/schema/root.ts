import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Company ID"),
  "page": z.number().int().describe("Request a specific page").optional(),
  "limit": z.number().int().describe("Limit results").optional(),
  "orderBy": z.string().describe("field1 asc, field2 desc").optional()
}