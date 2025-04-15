import { z } from "zod"

export const inputParams = {
  "order_voucher_merchant_all_shop": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `order_voucher_merchant_all_shop` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_rule/properties/voucher_available_scope/properties/order_voucher_available_shop/properties/order_voucher_merchant_all_shop\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "real_shop_ids": z.array(z.string()).describe("代运营商业关系门店列表，列表中的门店id是调用接口alipay.business.relation.shop.create创建门店返回的real_shop_id  接口参数是列表类型。").optional(),
  "shop_ids": z.array(z.string()).describe("券可使用的门店列表。列表中的门店id是通过调用接口ant.merchant.expand.shop.create创建门店返回的支付宝门店id  接口参数是列表类型。").optional()
}