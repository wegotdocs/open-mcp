import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of page IDs to filter by.").optional(),
  "theme_id": z.string().describe("A comma-separated list of theme IDs to filter by.").optional()
}