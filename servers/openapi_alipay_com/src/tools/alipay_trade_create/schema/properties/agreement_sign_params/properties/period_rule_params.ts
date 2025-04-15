import { z } from "zod"

export const inputParams = {
  "execute_time": z.string().describe("首次执行时间execute_time是周期扣款产品必填，即商户发起首次扣款的时间。精确到日，格式为yyyy-MM-dd\t结合其他必填的扣款周期参数，会确定商户以后的扣款计划。发起扣款的时间需符合这里的扣款计划。").optional(),
  "period": z.number().int().describe("周期数period是周期扣款产品必填。与另一参数period_type组合使用确定扣款周期，例如period_type为DAY，period=90，则扣款周期为90天。").optional(),
  "period_type": z.string().describe("周期类型period_type是周期扣款产品必填，枚举值为DAY和MONTH。\tDAY即扣款周期按天计，MONTH代表扣款周期按自然月。\t与另一参数period组合使用确定扣款周期，例如period_type为DAY，period=30，则扣款周期为30天；period_type为MONTH，period=3，则扣款周期为3个自然月。\t自然月是指，不论这个月有多少天，周期都计算到月份中的同一日期。例如1月3日到2月3日为一个自然月，1月3日到4月3日为三个自然月。注意周期类型使用MONTH的时候，计划扣款时间execute_time不允许传28日之后的日期（可以传28日），以此避免有些月份可能不存在对应日期的情况。").optional(),
  "scene_rule_params": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `scene_rule_params` to the tool, first call the tool `expandSchema` with \"/properties/agreement_sign_params/properties/period_rule_params/properties/scene_rule_params\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "single_amount": z.string().describe("单次扣款最大金额single_amount是周期扣款产品必填，即每次发起扣款时限制的最大金额，单位为元。商户每次发起扣款都不允许大于此金额。").optional(),
  "total_amount": z.string().describe("总金额限制，单位为元。如果传入此参数，商户多次扣款的累计金额不允许超过此金额。").optional(),
  "total_payments": z.number().int().describe("总扣款次数。如果传入此参数，则商户成功扣款的次数不能超过此次数限制（扣款失败不计入）。").optional()
}