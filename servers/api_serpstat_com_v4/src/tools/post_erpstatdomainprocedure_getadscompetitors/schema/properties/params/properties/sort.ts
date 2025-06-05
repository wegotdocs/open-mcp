import { z } from "zod"

export const inputParamsSchema = {
  "ads": z.enum(["asc","desc"]).describe("Sort by the number of ads.").optional(),
  "keywords": z.enum(["asc","desc"]).describe("Sort by the number of keywords.").optional(),
  "intersected": z.enum(["asc","desc"]).describe("Sort by the number of intersected keywords.").optional(),
  "missing_keywords": z.enum(["asc","desc"]).describe("Sort by the number of missing keywords.").optional()
}