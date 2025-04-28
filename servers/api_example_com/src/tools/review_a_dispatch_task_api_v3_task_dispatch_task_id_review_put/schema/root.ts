import { z } from "zod"

export const inputParamsSchema = {
  "task_id": z.number().int(),
  "session_id": z.string().optional(),
  "result": z.boolean().describe("true: Approved, false: Rejected"),
  "note": z.union([z.string(), z.null()]).optional()
}