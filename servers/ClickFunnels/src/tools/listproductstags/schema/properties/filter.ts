import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of tag IDs to filter by.").optional()
}