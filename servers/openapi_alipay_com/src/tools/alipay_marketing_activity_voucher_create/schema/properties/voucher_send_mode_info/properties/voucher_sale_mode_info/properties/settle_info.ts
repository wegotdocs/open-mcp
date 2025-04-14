import { z } from "zod"

export const inputParams = {
  "settle_mode": z.string().describe("请款|账期 模式").optional(),
  "settle_target_type": z.string().describe("结算的目标对象类型").optional()
}