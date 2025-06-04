import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Limit custom fields").optional(),
  "page": z.number().int().describe("Request a specific page").optional(),
  "orderBy": z.string().describe("field1 asc, field2 desc").optional()
}