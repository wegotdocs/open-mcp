import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().optional(),
  "page_no": z.number().int().describe("A page number within the paginated result set.").optional(),
  "page_size": z.number().int().describe("Number of results to return per page.").optional()
}