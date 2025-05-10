import { z } from "zod"

export const inputParamsSchema = {
  "session_id": z.string().optional(),
  "task_in": z.union([z.object({ "start_time": z.union([z.string().datetime({ offset: true }), z.null()]).describe("Task start time (edge local time). Null: Immediately start").optional() }), z.null()]).describe("任務。不指定: 立即開始。").optional(),
  "ota_id_list": z.array(z.number().int()).describe("OTA ID 清單。"),
  "dev_id_list": z.array(z.number().int()).describe("設備 ID 清單。")
}