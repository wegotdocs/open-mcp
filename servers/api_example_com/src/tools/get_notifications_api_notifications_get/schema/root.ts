import { z } from "zod"

export const inputParamsSchema = {
  "since": z.union([z.string(), z.null()]).describe("ISO timestamp to get notifications since").optional(),
  "limit": z.number().int().describe("Maximum number of notifications to return").optional()
}