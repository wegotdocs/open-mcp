import { z } from "zod"

export const inputParams = {
  "biz_code": z.string().describe("bizCode，代表当前使用的能力类型。").optional(),
  "outer_order_no": z.string().describe("客户业务单据号。请保持唯一。").optional()
}