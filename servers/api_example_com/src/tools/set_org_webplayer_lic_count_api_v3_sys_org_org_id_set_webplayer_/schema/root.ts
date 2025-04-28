import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.number().int().describe("組織 ID。"),
  "lic_count": z.number().int().describe("網頁播放器授權數量。"),
  "session_id": z.string().optional()
}