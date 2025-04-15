import { z } from "zod"

export const inputParams = {
  "begin_time": z.string().describe("查询开始时间 时间格式：yyyy-MM-dd HH:mm:ss 若不填写，则默认当前时间30天前。 注意：begin_time和end_time时间跨度最大一年").optional(),
  "end_time": z.string().describe("查询结束时间 时间格式：yyyy-MM-dd HH:mm:ss 若不填写，则默认当前时间。 注意：begin_time和end_time时间跨度最大一年").optional(),
  "status": z.string().describe("违规工单状态").optional()
}