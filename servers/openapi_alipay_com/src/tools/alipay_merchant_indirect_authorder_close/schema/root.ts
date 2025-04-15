import { z } from "zod"

export const inputParams = {
  "order_no": z.string().describe("意愿申请单号，参数二选一").optional(),
  "out_biz_no": z.string().describe("外部业务号，参数二选一，业务自定义，保证唯一").optional()
}