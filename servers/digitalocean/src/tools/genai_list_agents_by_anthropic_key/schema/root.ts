import { z } from "zod"

export const inputParamsSchema = {
  "uuid": z.string().describe("Unique ID of Anthropic key"),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}