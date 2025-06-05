import { z } from "zod"

export const inputParamsSchema = {
  "is_draft": z.boolean().optional(),
  "page_no": z.number().int().describe("A page number within the paginated result set.").optional(),
  "page_size": z.number().int().describe("Number of results to return per page.").optional(),
  "subject": z.string().optional(),
  "team": z.number().optional()
}