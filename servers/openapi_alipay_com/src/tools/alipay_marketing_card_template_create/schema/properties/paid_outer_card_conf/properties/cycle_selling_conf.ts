import { z } from "zod"

export const inputParams = {
  "cycle_selling_url": z.string().describe("用户开通连续购买地址").optional(),
  "cycle_type": z.array(z.string()).describe("周期购买类型。").optional(),
  "support_cycle_sell": z.boolean().describe("是否支持用户连续购买").optional()
}