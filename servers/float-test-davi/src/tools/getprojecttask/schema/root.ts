import { z } from "zod"

export const inputParamsSchema = {
  "project_task_id": z.number().int().describe("The project tasks ID as described in the `task_meta_id` field")
}