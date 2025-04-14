import { z } from "zod"

export const inputParams = {
  "cycle_flex_withhold_fee_name": z.string().describe("周期灵活扣的费用名称").optional(),
  "cycle_flex_withhold_max_price": z.string().describe("周期灵活扣单期扣款的最大额度").optional(),
  "cycle_flex_withhold_total_period_count": z.number().int().describe("周期灵活扣的总期数").optional()
}