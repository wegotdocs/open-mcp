import { z } from "zod"

export const inputParamsSchema = {
  "task_id": z.number().int().describe("任務 ID。"),
  "session_id": z.string().optional()
}