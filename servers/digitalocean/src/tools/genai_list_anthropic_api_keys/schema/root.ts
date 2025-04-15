import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}