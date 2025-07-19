import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().describe("Must be valid Name").optional(),
  "limit": z.number().int().optional()
}