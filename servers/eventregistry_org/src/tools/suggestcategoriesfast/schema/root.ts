import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "prefix": z.string().describe("Determine the search condition.").optional()
}