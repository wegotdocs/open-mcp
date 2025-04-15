import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("券的价值").optional(),
  "biz_type": z.string().describe("兑换券业务类型。 注意：兑换券通过大促活动权益报名能力推广至支付宝会场时，本参数必填。").optional(),
  "exchange_goods_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `exchange_goods_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_deduct_info/properties/exchange_voucher_info/properties/exchange_goods_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "floor_amount": z.string().describe("优惠门槛金额，表示只有当订单金额大于等于门槛金额时券才能使用。该字段为空时表示无门槛。  门槛金额的校验由服务商(商户)核销时自行校验，支付宝侧只做展示使用。").optional(),
  "voucher_deduct_threshold_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_deduct_threshold_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_deduct_info/properties/exchange_voucher_info/properties/voucher_deduct_threshold_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}