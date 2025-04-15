import { z } from "zod"

export const inputParams = {
  "begin_date": z.string().describe("数据开始日期，时间格式为 \"yyyyMMdd\" 。").optional(),
  "end_date": z.string().describe("数据结束日期，时间格式为\"yyyyMMdd\"。查询数据开始日期/结束日期时间跨度最大30天。").optional()
}