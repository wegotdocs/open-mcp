import { z } from "zod"

export const inputParamsSchema = {
  "missing": z.enum(["asc","desc"]).describe("Sort by missing keywords (asc — ascending, desc — descending).").optional(),
  "relevance": z.enum(["asc","desc"]).describe("Sort by keyword relevance.").optional(),
  "visibility": z.enum(["asc","desc"]).describe("Sort by site visibility.").optional(),
  "all": z.enum(["asc","desc"]).describe("Sort by all keywords.").optional(),
  "common": z.enum(["asc","desc"]).describe("Sort by common keywords.").optional()
}