import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Find degree by name").optional(),
  "limit": z.number().int().describe("Limit degrees").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}