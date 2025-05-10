import { z } from "zod"

export const inputParamsSchema = {
  "dst_tag_id": z.number().int(),
  "session_id": z.string().optional(),
  "name": z.string(),
  "display_name": z.union([z.string(), z.null()]).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "os_type_id_list": z.array(z.number().int()).describe("1: Windows, 2: Android, 3: Web"),
  "skditem_list": z.array(z.object({ "skditem_type_id": z.number().int().describe("時程項目類型 ID。1: 預設節目 (最低優先權), 2: 每日, 3: 每週 (根據 dow), 4: 不重覆 (單日), 5: 週間 (一至五), 6: 週末 (六日), 7: 插播節目 (最高優先權)。"), "prog_id": z.number().int().describe("節目 ID。"), "dow": z.union([z.number().int(), z.null()]).describe("星期幾 (ISO-8601)。一: 1, 二: 2, 三: 3, 四: 4, 五, 5, 六, 6, 日: 7)。").optional(), "start_date": z.union([z.string().date(), z.null()]).describe("開始日期 (區域時間)。").optional(), "end_date": z.union([z.string().date(), z.null()]).describe("結束日期 (區域時間)。").optional(), "start_time": z.union([z.string().time(), z.null()]).describe("開始時間 (區域時間)。").optional(), "end_time": z.union([z.string().time(), z.null()]).describe("結束時間 (區域時間)。").optional(), "exclusion_date_list": z.union([z.array(z.string().date()), z.null()]).describe("排除日期清單 (區域時間)。").optional() }))
}