import { z } from "zod"

export const inputParams = {
  "mini_app_use_guide_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `mini_app_use_guide_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_customer_guide_info/properties/voucher_use_guide_info/properties/mini_app_use_guide_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "use_guide_mode": z.array(z.string()).describe("使用引导模式").optional(),
  "use_url": z.string().describe("核销跳转链接").optional()
}