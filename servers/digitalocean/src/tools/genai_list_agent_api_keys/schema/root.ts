import { z } from "zod"

export const inputParamsSchema = {
  "agent_uuid": z.string().describe("Agent id"),
  "page": z.number().int().describe("Page number.").optional(),
  "per_page": z.number().int().describe("Items per page.").optional()
}