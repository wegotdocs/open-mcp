import { z } from "zod"

export const inputParamsSchema = {
  "agent_id": z.string(),
  "task_id": z.string(),
  "status": z.enum(["pending","assigned","in_progress","completed","failed","cancelled"]).describe("Task status enumeration"),
  "result": z.union([z.record(z.any()), z.null()]).optional(),
  "error": z.union([z.string(), z.null()]).optional()
}