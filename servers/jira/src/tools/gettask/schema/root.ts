import { z } from "zod"

export const inputParamsSchema = {
  "taskId": z.string().describe("The ID of the task.")
}