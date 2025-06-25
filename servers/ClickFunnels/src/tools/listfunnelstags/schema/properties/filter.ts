import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of funnel tag IDs to filter by.").optional(),
  "name": z.string().describe("A comma-separated list of funnel tag names to filter by.").optional()
}