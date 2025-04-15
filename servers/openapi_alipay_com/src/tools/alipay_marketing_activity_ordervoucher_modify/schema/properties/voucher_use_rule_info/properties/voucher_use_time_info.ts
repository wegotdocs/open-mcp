import { z } from "zod"

export const inputParams = {
  "absolute_period_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `absolute_period_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule_info/properties/voucher_use_time_info/properties/absolute_period_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "period_type": z.string().describe("券有效期。").optional(),
  "relative_period_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `relative_period_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule_info/properties/voucher_use_time_info/properties/relative_period_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}