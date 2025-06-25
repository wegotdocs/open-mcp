import { z } from "zod"

export const inputParamsSchema = {
  "enrollment_id": z.string().describe("A comma-separated list of enrollement IDs to filter by.").optional(),
  "lesson_id": z.string().describe("A comma-separated list of lesson IDs to filter by.").optional()
}