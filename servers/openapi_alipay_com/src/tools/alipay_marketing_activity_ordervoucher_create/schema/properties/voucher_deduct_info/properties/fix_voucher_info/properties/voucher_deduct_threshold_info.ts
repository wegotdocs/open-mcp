import { z } from "zod"

export const inputParams = {
  "customer_define_voucher_threshold_desc": z.string().describe("自定义门槛描述").optional(),
  "voucher_express_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_express_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_deduct_info/properties/fix_voucher_info/properties/voucher_deduct_threshold_info/properties/voucher_express_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "voucher_goods_quantity_specification_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_goods_quantity_specification_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_deduct_info/properties/fix_voucher_info/properties/voucher_deduct_threshold_info/properties/voucher_goods_quantity_specification_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}