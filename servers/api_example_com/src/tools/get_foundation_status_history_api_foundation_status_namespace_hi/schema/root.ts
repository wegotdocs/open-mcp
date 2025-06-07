import { z } from "zod"

export const inputParamsSchema = {
  "namespace": z.string(),
  "hours": z.number().int().describe("Number of hours of history to retrieve").optional(),
  "limit": z.number().int().describe("Maximum number of records to return").optional()
}