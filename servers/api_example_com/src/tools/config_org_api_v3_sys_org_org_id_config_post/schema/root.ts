import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.number().int(),
  "task_review_required": z.union([z.number().int(), z.null()]).describe("null or 0: Off, any or 1: On").optional(),
  "task_retention": z.union([z.number().int(), z.null()]).describe("minutes. null: forever").optional(),
  "session_id": z.string().optional()
}