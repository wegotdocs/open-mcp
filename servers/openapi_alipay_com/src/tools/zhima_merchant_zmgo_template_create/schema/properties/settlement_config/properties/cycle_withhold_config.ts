import { z } from "zod"

export const inputParams = {
  "deduct_plan": z.array(z.string()).describe("扣款计划").optional(),
  "exemption_period": z.string().describe("豁免期天数").optional(),
  "period": z.string().describe("周期").optional(),
  "period_type": z.string().describe("扣款周期类型，支持DAY-天模式，MONTH-月模式").optional(),
  "support_cycle_withhold_high_mode": z.boolean().describe("是否支持周期扣高级模式，高级模式下扣款计划中内一起的扣款金额可以进行定制").optional(),
  "support_exemption_period": z.boolean().describe("是否支持豁免期，如果支持豁免期，用户开通后再豁免期内退出无需扣款").optional(),
  "withhold_mode": z.string().describe("设置扣款模式，目前支持每月固定日期或固定时间间隔").optional()
}