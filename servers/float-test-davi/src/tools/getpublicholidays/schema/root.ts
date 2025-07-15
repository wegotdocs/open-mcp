import { z } from "zod"

export const inputParamsSchema = {
  "year": z.string().describe("Returns all results in the given year in format YYYY. Default if omitted is the current year. Overridden by `start_date` and `end_date` parameters").optional(),
  "region": z.number().int().describe("Filter results by one or more specific region ID (comma separated)").optional(),
  "start_date": z.string().describe("Start of date range in format YYYY-MM-DD. Must be used together with `end_date`").optional(),
  "end_date": z.string().describe("End of date range in format YYYY-MM-DD. Must be used together with `start_date`").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional()
}