import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "task_id_list": z.array(z.number().int()).describe("任務 ID 清單。"),
  "note": z.union([z.string(), z.null()]).describe("說明。").optional()
}