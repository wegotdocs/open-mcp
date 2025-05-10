import { z } from "zod"

export const inputParamsSchema = {
  "ticker": z.string().describe("股票代码").optional(),
  "date": z.union([z.string(), z.null()]).describe("预测日期，格式: YYYY-MM-DD，默认为最近的交易日").optional()
}