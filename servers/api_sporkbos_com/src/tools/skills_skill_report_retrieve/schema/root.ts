import { z } from "zod"

export const inputParamsSchema = {
  "group": z.string().optional(),
  "order_by": z.enum(["asc","desc"]).describe("Order by asc or desc").optional(),
  "sort_by": z.string().describe("Sort by field name").optional(),
  "team": z.number().int().describe("Filter by team ID."),
  "view_by": z.enum(["level","score"]).describe("View skill report by 'level' or 'score'").optional()
}