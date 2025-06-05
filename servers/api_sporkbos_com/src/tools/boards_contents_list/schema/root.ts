import { z } from "zod"

export const inputParamsSchema = {
  "ulid": z.string(),
  "content_name": z.string().describe("Search contents by name").optional(),
  "content_type": z.string().describe("Filter by content type").optional(),
  "due_date_range_end": z.string().describe("Filter by due date (end date)").optional(),
  "due_date_range_start": z.string().describe("Filter by due date (start date)").optional(),
  "importance": z.string().describe("Filter by importance (comma-separated values)").optional(),
  "name": z.string().optional(),
  "order_by": z.string().describe("Sort order: 'asc' or 'desc'").optional(),
  "owner": z.string().describe("Filter by owner (comma-separated values)").optional(),
  "page_no": z.number().int().describe("A page number within the paginated result set.").optional(),
  "page_size": z.number().int().describe("Number of results to return per page.").optional(),
  "show_completed": z.boolean().optional(),
  "sort_by": z.string().describe("Sort by field name").optional(),
  "status": z.string().describe("Filter by status (comma-separated values)").optional(),
  "team": z.number().optional(),
  "tree_view": z.boolean().optional()
}