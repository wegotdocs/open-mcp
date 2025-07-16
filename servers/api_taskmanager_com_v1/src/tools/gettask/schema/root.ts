import { z } from "zod"

export const inputParamsSchema = {
  "taskId": z.string().uuid().describe("ID of the task to retrieve")
}