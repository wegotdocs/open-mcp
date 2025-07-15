import { z } from "zod"

export const inputParamsSchema = {
  "task_id": z.number().int().describe("The allocation as a task ID")
}