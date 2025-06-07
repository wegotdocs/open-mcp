import { z } from "zod"

export const inputParamsSchema = {
  "agent_id": z.string(),
  "task_id": z.string()
}