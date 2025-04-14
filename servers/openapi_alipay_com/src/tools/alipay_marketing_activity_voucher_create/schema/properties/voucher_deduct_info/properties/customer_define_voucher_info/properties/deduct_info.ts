import { z } from "zod"

export const inputParams = {
  "customer_define_deduct_rule": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `customer_define_deduct_rule` to the tool, first call the tool `expandSchema` with \"/properties/voucher_deduct_info/properties/customer_define_voucher_info/properties/deduct_info/properties/customer_define_deduct_rule\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}