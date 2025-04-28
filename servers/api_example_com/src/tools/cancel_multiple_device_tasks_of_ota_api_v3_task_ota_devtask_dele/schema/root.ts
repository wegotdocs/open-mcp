import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "devtask_id_list": z.array(z.number().int()).describe("設備任務 ID 清單。"),
  "note": z.union([z.string(), z.null()]).describe("說明。").optional()
}