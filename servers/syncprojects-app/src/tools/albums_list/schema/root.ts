import { z } from "zod"

export const inputParams = {
  "page": z.number().int().describe("A page number within the paginated result set.").optional()
}