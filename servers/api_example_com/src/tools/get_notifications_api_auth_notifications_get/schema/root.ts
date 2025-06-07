import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("Maximum number of notifications to return").optional()
}