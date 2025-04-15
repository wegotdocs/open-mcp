import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("券的价值").optional(),
  "biz_type": z.string().describe("兑换券业务类型。\t\t枚举值\t团购券：GROUP_BUY_EXCHANGE_VOUCHER\t代金券：FIX_EXCHANGE_VOUCHER\t注意：兑换券通过<a href=\"https://opendocs.alipay.com/pre-open/repo-00tbta\">大促活动权益报名</a>能力推广至支付宝会场时，本参数必填。").optional(),
  "customer_service_mobile": z.string().describe("客服电话").optional(),
  "customer_service_url": z.string().describe("客服链接").optional(),
  "floor_amount": z.string().describe("门槛金额。说明：该字段可不填，认为无门槛;").optional(),
  "overdue_refundable": z.boolean().describe("是否支持优惠券过期后，自动退款给用户。\t不填默认否，枚举值：\ttrue：是\tfalse：否").optional(),
  "payee_pid": z.string().describe("收款账号。目前的结算规则是，每核销一笔优惠券，支付宝会打款到该收款账户。").optional(),
  "refundable": z.boolean().describe("购买的优惠券是否允许退款。不填默认否，枚举值：\ttrue：是\tfalse：否").optional(),
  "sale_amount": z.string().describe("用户购买优惠券需要支付的金额").optional(),
  "settle_type": z.string().describe("解决类型。").optional(),
  "voucher_detail_url": z.string().describe("领(购)券详情页链接，从支付宝公域跳转到服务商(商户)自定义领(购)券详情页。").optional(),
  "voucher_name": z.string().describe("对消费者展示的券(商品)名称。").optional()
}