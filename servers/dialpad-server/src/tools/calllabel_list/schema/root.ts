import { z } from "zod"

export const inputParamsSchema = {
  "limit": z.number().int().describe("The maximum number of results to return.").optional()
}