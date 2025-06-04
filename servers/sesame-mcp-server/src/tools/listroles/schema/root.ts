import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Limit departments").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}