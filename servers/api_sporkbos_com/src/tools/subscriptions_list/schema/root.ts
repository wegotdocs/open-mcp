import { z } from "zod"

export const inputParamsSchema = {
  "page_no": z.number().int().describe("A page number within the paginated result set.").optional(),
  "page_size": z.number().int().describe("Number of results to return per page.").optional(),
  "team": z.number().int().optional(),
  "type": z.enum(["Content","Engage","Feedback","Grow","Perform","Survey","Trial"]).describe("* `Trial` - Trial\n* `Engage` - Engage\n* `Survey` - Survey\n* `Content` - Content\n* `Feedback` - Feedback\n* `Perform` - Perform\n* `Grow` - Grow").optional()
}