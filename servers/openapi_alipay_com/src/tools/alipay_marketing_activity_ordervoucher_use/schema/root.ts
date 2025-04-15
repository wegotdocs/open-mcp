import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id"),
  "voucher_code": z.string().describe("待核销的券码。"),
  "biz_dt": z.string().describe("外部优惠券的核销时间，用于流水记录。 格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "goods_detail": z.array(z.object({ "goods_id": z.string().describe("商品编号").optional(), "goods_name": z.string().describe("商品名称").optional(), "price": z.string().describe("商品单价。单位 元\t\t精确到小数点后2位。").optional(), "quantity": z.number().int().describe("商品数量").optional() })).describe("商品明细信息").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。\t\t\t\t幂等作用：\t\t参数不变的情况下，再次请求返回与上一次相同的结果。\t\t\t\t外部接入方需保证业务单号唯一。").optional(),
  "real_shop_id": z.string().describe("用户核销优惠券的代运营商业关系门店id，调用接口alipay.business.relation.shop.create创建门店返回的real_shop_id。\t限制:\t传入的门店id必须是创建商家券voucher_use_rule. voucher_available_scope.  order_voucher_available_shop对象中real_shop_ids中的门店id").optional(),
  "store_id": z.string().describe("用户核销优惠券的支付门店id,调用接口<a href=\"https://opendocs.alipay.com/open/03s3jk?pathHash=04312530&scene=common\" target=\"_blank\">ant.merchant.expand.shop.create</a>创建门店返回的门店id。\t限制:\t传入的门店id必须是创建商家券voucher_use_rule. voucher_available_scope.  order_voucher_available_shop对象中shop_ids中的门店id").optional(),
  "total_fee": z.string().describe("订单总金额").optional(),
  "trade_channel": z.string().describe("交易渠道。").optional(),
  "trade_no": z.string().describe("该交易在支付宝系统中的交易流水号。\t注意：若用户使用支付宝为交易的渠道，本参数必填。").optional(),
  "voucher_use_detail_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `voucher_use_detail_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_use_detail_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}