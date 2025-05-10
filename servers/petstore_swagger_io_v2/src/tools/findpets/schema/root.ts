import { z } from "zod"

export const inputParamsSchema = {
  "tags": z.array(z.string()).describe("tags to filter by").optional(),
  "limit": z.number().int().describe("maximum number of results to return").optional()
}