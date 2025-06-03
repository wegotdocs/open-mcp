import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("Page number (zero-based)").optional(),
  "size": z.number().int().describe("Number of items per page").optional(),
  "read": z.boolean().describe("Filter by read status (true/false). If not provided, returns all notifications").optional()
}