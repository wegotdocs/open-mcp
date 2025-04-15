import { z } from "zod"

export const inputParams = {
  "floor_amount": z.string().describe("门槛金额。说明：该字段可不填，认为无门槛;").optional(),
  "special_amount": z.string().describe("特价，即：原价-特价=优惠金额。").optional(),
  "voucher_deduct_threshold_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_deduct_threshold_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_deduct_info/properties/special_voucher_info/properties/voucher_deduct_threshold_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}