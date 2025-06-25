import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of pipeline IDs to filter by.").optional()
}