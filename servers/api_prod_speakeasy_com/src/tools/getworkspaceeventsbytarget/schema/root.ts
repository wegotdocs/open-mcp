import { z } from "zod"

export const inputParamsSchema = {
  "workspace_id": z.string().describe("Unique identifier of the workspace."),
  "target_id": z.string().describe("Filter to only return events corresponding to a particular gen_lock_id (gen_lock_id uniquely identifies a target)"),
  "after_created_at": z.string().datetime({ offset: true }).describe("Filter to only return events created after this timestamp").optional()
}