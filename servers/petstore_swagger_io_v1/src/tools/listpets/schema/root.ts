import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("How many items to return at one time (max 100)").optional()
}