import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("周期性扣款产品，授权免密支付协议号").optional(),
  "deduct_time": z.string().describe("商户下一次扣款时间").optional(),
  "memo": z.string().describe("具体修改原因").optional()
}