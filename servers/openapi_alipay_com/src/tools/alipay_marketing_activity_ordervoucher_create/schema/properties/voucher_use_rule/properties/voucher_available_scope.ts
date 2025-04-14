import { z } from "zod"

export const inputParams = {
  "order_voucher_available_city_code": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `order_voucher_available_city_code` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule/properties/voucher_available_scope/properties/order_voucher_available_city_code\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "order_voucher_available_shop": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `order_voucher_available_shop` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule/properties/voucher_available_scope/properties/order_voucher_available_shop\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "voucher_available_type": z.string().describe("可用范围类型。").optional()
}