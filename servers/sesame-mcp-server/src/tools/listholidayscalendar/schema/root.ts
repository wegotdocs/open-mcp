import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional(),
  "name[contains]": z.string().describe("Filter by name").optional()
}