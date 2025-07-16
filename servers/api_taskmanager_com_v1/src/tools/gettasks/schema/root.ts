import { z } from "zod"

export const inputParamsSchema = {
  "status": z.enum(["pending","in_progress","completed","cancelled"]).describe("Filter tasks by status").optional(),
  "limit": z.number().int().gte(1).lte(100).describe("Number of tasks to return").optional(),
  "offset": z.number().int().gte(0).describe("Number of tasks to skip").optional()
}