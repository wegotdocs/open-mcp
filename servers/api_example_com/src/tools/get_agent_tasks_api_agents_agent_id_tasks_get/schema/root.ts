import { z } from "zod"

export const inputParamsSchema = {
  "agent_id": z.string(),
  "status": z.union([z.enum(["pending","assigned","in_progress","completed","failed","cancelled"]).describe("Task status enumeration"), z.null()]).optional()
}