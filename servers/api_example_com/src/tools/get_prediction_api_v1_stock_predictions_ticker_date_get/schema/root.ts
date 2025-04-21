import { z } from "zod"

export const inputParamsSchema = {
  "ticker": z.string(),
  "date": z.string(),
  "start_bar": z.number().int().describe("开始的时间段编号，1表示开盘后15分钟").optional(),
  "end_bar": z.number().int().describe("结束的时间段编号，2表示开盘后30分钟").optional()
}