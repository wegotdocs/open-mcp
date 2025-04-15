import { z } from "zod"

export const inputParams = {
  "change_time": z.string().describe("服务变更时间").optional(),
  "new_amount": z.string().describe("服务变更后新金额").optional(),
  "ori_amount": z.string().describe("原始价格").optional()
}