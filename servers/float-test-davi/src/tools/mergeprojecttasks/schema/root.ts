import { z } from "zod"

export const inputParamsSchema = {
  "task_meta_ids": z.array(z.number().int()).describe("List of project task IDs as described by `task_meta_id`"),
  "task_name": z.string().min(0).max(200).describe("The final name of the merged project task, an empty strings is valid. The final merged task will attempt to match existing names and if found merge into that `task_meta_id`"),
  "billable": z.number().int().describe("The final state of the merged project tasks; `1` = Billable, `0` = Non-billable").optional()
}