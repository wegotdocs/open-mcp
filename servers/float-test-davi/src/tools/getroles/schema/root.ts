import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional(),
  "expand": z.string().describe("Comma-delimited values expands the response with additional fields: `cost_rate_history`, `people_ids`,`people_count`").optional()
}