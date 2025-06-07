import { z } from "zod"

export const inputParamsSchema = {
  "search_term": z.string().describe("Search term to find in role names"),
  "max_results": z.number().int().gte(1).lte(100).describe("Maximum number of results to return").optional()
}