import { z } from "zod"

export const inputParamsSchema = {
  "region_queries_count": z.enum(["asc","desc"]).describe("Sort by keyword search volume, where 'asc' means ascending and 'desc' means descending.").optional(),
  "types": z.enum(["asc","desc"]).describe("Sort by special elements associated with the keywords, with 'asc' for ascending and 'desc' for descending.").optional(),
  "cost": z.enum(["asc","desc"]).describe("Sort by the keyword cost per click (CPC), with 'asc' for ascending and 'desc' for descending.").optional(),
  "keyword_length": z.enum(["asc","desc"]).describe("Sort by the length of the keyword (number of words), with 'asc' for ascending and 'desc' for descending.").optional(),
  "concurrency": z.enum(["asc","desc"]).describe("Sort by concurrency, indicating the availability or competition for the keyword, with 'asc' for ascending and 'desc' for descending.").optional(),
  "geo_names": z.enum(["asc","desc"]).describe("Sort by the toponyms (geographic locations) related to the keyword, with 'asc' for ascending and 'desc' for descending.").optional(),
  "traff": z.enum(["asc","desc"]).describe("Sort by the traffic associated with the keyword, with 'asc' for ascending and 'desc' for descending.").optional(),
  "region_queries_count_wide": z.enum(["asc","desc"]).describe("Sort by the keyword volume in broad match, where 'asc' means ascending and 'desc' means descending.").optional(),
  "dynamic": z.enum(["asc","desc"]).describe("Sort by keyword dynamic, indicating how often the keyword changes, with 'asc' for ascending and 'desc' for descending.").optional(),
  "position": z.enum(["asc","desc"]).describe("Sort by the position of the keyword, with 'asc' for ascending and 'desc' for descending.").optional(),
  "found_results": z.enum(["asc","desc"]).describe("Sort by the number of results found for the keyword, with 'asc' for ascending and 'desc' for descending.").optional()
}