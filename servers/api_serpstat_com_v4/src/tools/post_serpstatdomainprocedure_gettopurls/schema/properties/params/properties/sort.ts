import { z } from "zod"

export const inputParamsSchema = {
  "organic_keywords": z.enum(["asc","desc"]).describe("Sort by the number of organic keywords (asc — ascending, desc — descending).").optional(),
  "facebook_shares": z.enum(["asc","desc"]).describe("Sort by the number of Facebook shares.").optional(),
  "potential_traff": z.enum(["asc","desc"]).describe("Sort by potential traffic.").optional()
}