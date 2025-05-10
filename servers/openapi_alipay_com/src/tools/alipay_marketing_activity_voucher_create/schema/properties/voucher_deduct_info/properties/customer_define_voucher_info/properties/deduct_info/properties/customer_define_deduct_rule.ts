import { z } from "zod"

export const inputParams = {
  "customer_define_deduct_rule_desc": z.string().describe("自定义优惠规则描述").optional()
}