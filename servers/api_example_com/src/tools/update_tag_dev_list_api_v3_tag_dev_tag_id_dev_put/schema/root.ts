import { z } from "zod"

export const inputParamsSchema = {
  "tag_id": z.number().int().describe("標籤 ID。"),
  "flush": z.union([z.number().int(), z.null()]).describe("是否清除舊關聯。不指定/0: 不清除 (添加), 任意值/1: 清除 (設定)。").optional(),
  "session_id": z.string().optional()
}