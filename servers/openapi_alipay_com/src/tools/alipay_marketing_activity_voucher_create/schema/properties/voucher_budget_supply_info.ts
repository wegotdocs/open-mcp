import { z } from "zod"

export const inputParams = {
  "budget_type": z.string().describe("营销资金预算类型 \t1、免充值：制券方无需提前充值资金，用户核销支付券时，直接从订单原价中扣除优惠减价金额，最终只将用户实际支付的金额结算给核销商户，商户实收少于订单原价。  \t2.预充值:  制券方需将优惠预算提前充值到支付宝指定营销账户中，用户核销支付券时，系统从该账户可用余额中扣除优惠减价部分对应的资金，连同用户实际支付的资金，一并结算给核销商户，不影响实收。").optional(),
  "voucher_recharge_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_recharge_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_budget_supply_info/properties/voucher_recharge_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}