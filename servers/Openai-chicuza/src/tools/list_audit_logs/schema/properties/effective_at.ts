import { z } from "zod"

export const inputParamsSchema = {
  "gt": z.number().int().describe("Return only events whose `effective_at` (Unix seconds) is greater than this value.").optional(),
  "gte": z.number().int().describe("Return only events whose `effective_at` (Unix seconds) is greater than or equal to this value.").optional(),
  "lt": z.number().int().describe("Return only events whose `effective_at` (Unix seconds) is less than this value.").optional(),
  "lte": z.number().int().describe("Return only events whose `effective_at` (Unix seconds) is less than or equal to this value.").optional()
}