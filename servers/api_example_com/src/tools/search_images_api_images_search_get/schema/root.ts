import { z } from "zod"

export const inputParamsSchema = {
  "query": z.string().describe("Search query (service name, repository, or tag)"),
  "limit": z.number().int().describe("Maximum number of results").optional()
}