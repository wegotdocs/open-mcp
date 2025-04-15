import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("面额，每张代金券可以抵扣的金额。").optional(),
  "floor_amount": z.string().describe("门槛金额。该字段不填写，认为无门槛。").optional(),
  "voucher_deduct_threshold_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_deduct_threshold_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_deduct_info/properties/fix_voucher_info/properties/voucher_deduct_threshold_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}