import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this team."),
  "order_by": z.enum(["asc","desc"]).describe("Order by asc or desc").optional(),
  "sort_by": z.string().describe("Sort by field name").optional()
}