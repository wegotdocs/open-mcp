import { z } from "zod"

export const inputParamsSchema = {
  "keyword_length": z.enum(["asc","desc"]).describe("Sort by the number of words in the keyword.").optional(),
  "position": z.enum(["asc","desc"]).describe("Sort by search position.").optional(),
  "type": z.enum(["asc","desc"]).describe("Sort by result type.").optional(),
  "cost": z.enum(["asc","desc"]).describe("Sort by cost.").optional(),
  "concurrency": z.enum(["asc","desc"]).describe("Sort by concurrency level.").optional(),
  "found_results": z.enum(["asc","desc"]).describe("Sort by the number of found results.").optional(),
  "region_queries_count": z.enum(["asc","desc"]).describe("Sort by the number of queries in the selected region.").optional(),
  "region_queries_count_wide": z.enum(["asc","desc"]).describe("Sort by the number of queries across multiple regions.").optional(),
  "types": z.enum(["asc","desc"]).describe("Sort by content types.").optional(),
  "difficulty": z.enum(["asc","desc"]).describe("Sort by keyword difficulty.").optional(),
  "geo_names": z.enum(["asc","desc"]).describe("Sort by geographic names.").optional()
}