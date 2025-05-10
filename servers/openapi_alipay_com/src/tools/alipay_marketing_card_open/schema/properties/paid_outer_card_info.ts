import { z } from "zod"

export const inputParams = {
  "action": z.string().describe("用户操作类型").optional(),
  "cycle_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `cycle_info` to the tool, first call the tool `expandSchema` with \"/properties/paid_outer_card_info/properties/cycle_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "purchase_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `purchase_info` to the tool, first call the tool `expandSchema` with \"/properties/paid_outer_card_info/properties/purchase_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}