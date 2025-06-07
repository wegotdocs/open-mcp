import { z } from "zod"

export const inputParamsSchema = {
  "status": z.union([z.enum(["pending","assigned","in_progress","completed","failed","cancelled"]).describe("Task status enumeration"), z.null()]).optional(),
  "task_type": z.union([z.enum(["environment_create","environment_delete","environment_update","image_update","kubectl_command","git_operation","health_check","release_update","custom"]).describe("Types of tasks agents can execute"), z.null()]).optional(),
  "environment": z.union([z.string(), z.null()]).optional(),
  "assigned_agent_id": z.union([z.string(), z.null()]).optional()
}