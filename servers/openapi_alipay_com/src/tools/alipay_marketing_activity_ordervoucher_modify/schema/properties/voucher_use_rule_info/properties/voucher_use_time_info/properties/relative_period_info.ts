import { z } from "zod"

export const inputParams = {
  "time_restrict_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `time_restrict_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule_info/properties/voucher_use_time_info/properties/relative_period_info/properties/time_restrict_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "valid_days_after_receive": z.number().int().describe("券生效后 N 天内可以使用。 可以配合wait_days_after_receive 字段使用。").optional(),
  "wait_days_after_receive": z.number().int().describe("用户领券后需要等待 N 天，券才可以生效。 \t字段值为 0 表示用户领券后立刻生效。").optional()
}