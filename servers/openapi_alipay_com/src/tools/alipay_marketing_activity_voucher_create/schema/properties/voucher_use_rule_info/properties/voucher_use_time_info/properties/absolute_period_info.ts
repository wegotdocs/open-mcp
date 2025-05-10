import { z } from "zod"

export const inputParams = {
  "time_restrict_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `time_restrict_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule_info/properties/voucher_use_time_info/properties/absolute_period_info/properties/time_restrict_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "valid_begin_time": z.string().describe("券可使用的开始时间。 格式为：yyyy-MM-dd HH:mm:ss。").optional(),
  "valid_end_time": z.string().describe("券可使用的结束时间。 格式为yyyy-MM-dd HH:mm:ss。").optional()
}