import { z } from "zod"

export const inputParamsSchema = {
  "region_queries_count": z.enum(["asc","desc"]).describe("Sort by the number of queries in the selected region.").optional(),
  "types": z.enum(["asc","desc"]).describe("Sort by content types.").optional(),
  "cost": z.enum(["asc","desc"]).describe("Sort by cost.").optional(),
  "keyword_length": z.enum(["asc","desc"]).describe("Sort by keyword length.").optional(),
  "concurrency": z.enum(["asc","desc"]).describe("Sort by concurrency level.").optional(),
  "geo_names": z.enum(["asc","desc"]).describe("Sort by geographic names.").optional(),
  "traff": z.enum(["asc","desc"]).describe("Sort by traffic.").optional(),
  "region_queries_count_wide": z.enum(["asc","desc"]).describe("Sort by the number of queries across multiple regions.").optional(),
  "dynamic": z.enum(["asc","desc"]).describe("Sort by dynamic changes.").optional(),
  "position": z.enum(["asc","desc"]).describe("Sort by search position.").optional(),
  "found_results": z.enum(["asc","desc"]).describe("Sort by the number of found results.").optional()
}