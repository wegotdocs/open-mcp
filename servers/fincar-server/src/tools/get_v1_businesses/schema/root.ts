import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Maximum number of results to return").optional(),
  "offset": z.number().int().describe("Number of results to skip").optional()
}