import { z } from "zod"

export const inputParamsSchema = {
  "status": z.enum(["active","inactive"]).describe("Absence type status").optional(),
  "limit": z.number().int().describe("Limit results").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}