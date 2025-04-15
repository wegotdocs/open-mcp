import { z } from "zod"

export const inputParams = {
  "recharge_type": z.string().describe("预充值方式。").optional(),
  "voucher_balance_recharge_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_balance_recharge_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_budget_supply_info/properties/voucher_recharge_info/properties/voucher_balance_recharge_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}