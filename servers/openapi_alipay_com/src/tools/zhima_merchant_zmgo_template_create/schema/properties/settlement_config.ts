import { z } from "zod"

export const inputParams = {
  "custom_fee_name": z.string().describe("会员费扣费名称").optional(),
  "cycle_flex_withhold_config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `cycle_flex_withhold_config` to the tool, first call the tool `expandSchema` with \"/properties/settlement_config/properties/cycle_flex_withhold_config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "cycle_withhold_config": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `cycle_withhold_config` to the tool, first call the tool `expandSchema` with \"/properties/settlement_config/properties/cycle_withhold_config\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "exp_stop_delay_days": z.number().int().describe("预计结算延迟天数，当exp_stop_time_mode取值RELATIVE_DATE、ABSOLATE_DATE、ABSOLUTE_PLUS_1_DATE时，必传").optional(),
  "exp_stop_time": z.string().describe("预期结算时间，当exp_stop_time_mode取值APPOINT_DATE时，必传").optional(),
  "exp_stop_time_mode": z.string().describe("预计结算时间模式，取值：（1）RELATIVE_DATE(\"RELATIVE_DATE\", \"相对日期\"), （2）ABSOLATE_DATE(\"ABSOLATE_DATE\", \"绝对日期(当日开始计算)\"), （3）ABSOLUTE_PLUS_1_DATE(\"ABSOLUTE_PLUS_1_DATE\", \"绝对日期(次日开始计算)\"), （4）APPOINT_DATE(\"APPOINT_DATE\", \"指定日期\")").optional(),
  "fulfilltimes_custom_settlement_plan": z.string().describe("按履约次数灵活扣款计划。当settlement_type取值为fulfillTimesCustomSettlement时，此属性必传").optional(),
  "settlement_type": z.string().describe("结算类型，取值：\t    BENEFIT_SETTLEMENT(\"benefitSettlement\", \"按权益金额结算\"),\t    FULFILL_TIMES_CUSTOM_SETTLEMENT(\"fulfillTimesCustomSettlement\",\"按履约次数扣款\")").optional()
}