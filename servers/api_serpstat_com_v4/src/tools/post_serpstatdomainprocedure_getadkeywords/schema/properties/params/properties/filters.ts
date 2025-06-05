import { z } from "zod"

export const inputParamsSchema = {
  "position": z.number().int().describe("The exact position of the keyword in search results, e.g., 1.").optional(),
  "position_from": z.number().int().describe("The minimum position of the keyword in search results.").optional(),
  "position_to": z.number().int().describe("The maximum position of the keyword in search results.").optional(),
  "queries": z.number().int().describe("The exact number of queries, e.g., 5.").optional(),
  "queries_from": z.number().int().describe("The minimum number of queries.").optional(),
  "queries_to": z.number().int().describe("The maximum number of queries.").optional(),
  "region_queries_count": z.number().int().describe("The volume of the keyword by the selected region, e.g., 1000.").optional(),
  "region_queries_count_from": z.number().int().describe("The minimum volume of the keyword by the selected region.").optional(),
  "region_queries_count_to": z.number().int().describe("The maximum volume of the keyword by the selected region.").optional(),
  "region_queries_count_wide": z.number().int().describe("The broad volume of the keyword across multiple regions, e.g., 1000.").optional(),
  "region_queries_count_wide_from": z.number().int().describe("The minimum broad volume of the keyword.").optional(),
  "region_queries_count_wide_to": z.number().int().describe("The maximum broad volume of the keyword.").optional(),
  "cost": z.number().describe("Cost value, e.g., 10.").optional(),
  "cost_from": z.number().describe("The minimum cost value.").optional(),
  "cost_to": z.number().describe("The maximum cost value.").optional(),
  "concurrency": z.number().int().describe("The concurrency value, e.g., 7.").optional(),
  "concurrency_from": z.number().int().describe("The minimum concurrency value.").optional(),
  "concurrency_to": z.number().int().describe("The maximum concurrency value.").optional(),
  "difficulty": z.number().int().describe("The difficulty level of the keyword, e.g., 3.").optional(),
  "difficulty_from": z.number().int().describe("The minimum difficulty level of the keyword.").optional(),
  "difficulty_to": z.number().int().describe("The maximum difficulty level of the keyword.").optional(),
  "minus_url": z.string().url().describe("Excludes results from a specific URL, e.g., https://www.apple.com/airpods-2nd-generation/.").optional(),
  "pm_url": z.string().url().describe("Filters results by a specific URL, e.g., https://www.apple.com/airpods/.").optional(),
  "right_spelling": z.boolean().describe("Filters by spelling correction. If true, results will include corrected spelling; if false, only exact spelling is used.").optional(),
  "misspelled": z.boolean().describe("Filters misspelled queries. If true, only misspelled keywords are included; if false, only correctly spelled keywords are shown.").optional()
}