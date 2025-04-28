import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.number().int().describe("公司 ID。"),
  "start_date": z.string().date().describe("任務建立時間開始日期。"),
  "end_date": z.string().date().describe("任務建立時間結束日期。"),
  "time_offset": z.number().describe("瀏覽器時區。"),
  "session_id": z.string().optional()
}