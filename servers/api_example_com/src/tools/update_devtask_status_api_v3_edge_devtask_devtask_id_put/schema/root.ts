import { z } from "zod"

export const inputParamsSchema = {
  "devtask_id": z.number().int().describe("設備任務 ID。"),
  "display_name": z.string().describe("設備名稱。"),
  "status_id": z.number().int().describe("設備任務狀態 ID。只能是 1000 Done, 1001 Failed 或 1005 Processing。"),
  "total_count": z.union([z.number().int(), z.null()]).describe("總下載數量 (bytes)。不指定: 清除。").optional(),
  "downloaded_count": z.union([z.number().int(), z.null()]).describe("已下載數量 (bytes)。不指定: 清除。").optional(),
  "download_speed": z.union([z.number().int(), z.null()]).describe("下載速度 (bytes/s)。不指定: 清除。").optional(),
  "note": z.union([z.string(), z.null()]).describe("備註 (下載中檔名或錯誤訊息)。不指定: 清除。").optional(),
  "storage_usage": z.union([z.number().int(), z.null()]).describe("儲存空間使用量。不指定: 不更新。").optional(),
  "access-code": z.string().describe("設備存取碼。")
}