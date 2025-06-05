import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this team."),
  "creators": z.string().optional(),
  "end": z.string().describe("Filter by date range - YYYY-MM-DD").optional(),
  "feedback_types": z.string().optional(),
  "order_by": z.enum(["asc","desc"]).describe("Order by asc or desc").optional(),
  "performance_types": z.string().optional(),
  "recipients": z.string().optional(),
  "sort_by": z.string().describe("Sort by field name").optional(),
  "start": z.string().describe("Filter by date range - YYYY-MM-DD").optional(),
  "users": z.string().optional()
}