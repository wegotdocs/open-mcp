import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the filter."),
  "columns": z.array(z.string()).optional()
}