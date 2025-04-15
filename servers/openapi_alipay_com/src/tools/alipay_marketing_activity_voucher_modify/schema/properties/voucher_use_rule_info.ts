import { z } from "zod"

export const inputParams = {
  "payment_restriction_list": z.array(z.string()).describe("支付方式限制").optional(),
  "quantity_limit_per_user": z.number().int().describe("核销次数限制。").optional(),
  "quantity_limit_per_user_period_type": z.string().describe("周期限领配置,限制每人在固定周期内领取张数(voucher_quantity_limit_per_user),默认LIFE_CYCLE").optional(),
  "voucher_max_use_times": z.number().int().describe("券最大核销次数。").optional(),
  "voucher_use_ext_info": z.string().describe("自定义扩展信息").optional(),
  "voucher_use_time_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_use_time_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule_info/properties/voucher_use_time_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}