import { z } from "zod"

export const inputParamsSchema = {
  "tag_name": z.string().describe("Limits the results to database clusters with a specific tag.").optional()
}