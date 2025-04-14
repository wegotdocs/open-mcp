import { z } from "zod"

export const inputParams = {
  "fund_custody_mode": z.string().describe("资金托管方式").optional(),
  "overdue_refundable": z.boolean().describe("是否支持优惠券过期后，自动退款给用户。 不填默认否，枚举值： true：是  false：否。自动退款功能需要服务商在优惠券过期时，主动调用alipay.marketing.activity.order.refund接口进行退款。  如果配置优惠券时选择了过期自动退款，但是实际券过期后，服务商没有进行退款，那么用户投诉后，需要服务商进行解决。").optional(),
  "overdue_refundable_need_confirm": z.boolean().describe("在支持过期自动退款后，支付宝发起自动退款前 是否需要向商户确认退款。 不填默认否，枚举值： true：是 false：否。\t\t如果选择了 true:是 ，则需要商户配合接入  过期自动退款前是否需要向商户确认SPI(spi.alipay.marketing.activity.order.refundconfirm)  以及   退款确认结果API(alipay.marketing.activity.order.refundconfirmcommit)").optional(),
  "payee_pid": z.string().describe("收款账号。 目前的结算规则是，每核销一笔优惠券，支付宝会打款到该收款账户。").optional(),
  "refundable": z.boolean().describe("购买的优惠券是否允许退款。 不填默认否，枚举值： true：是 false：否").optional(),
  "refundable_need_confirm": z.boolean().describe("在支持随时退后，支付宝发起退款前用于判断是否需要向商户确认退款。 不填默认否，枚举值： true：是 false：否。 如果选择了 true:是  ，则需要商户配合接入退款前是否需要向商户确认SPI(spi.alipay.marketing.activity.order.refundconfirm)").optional(),
  "sale_amount": z.string().describe("用户购买优惠券需要支付的金额").optional(),
  "settle_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `settle_info` to the tool, first call the tool `expandSchema` with \"/properties/voucher_send_mode_info/properties/voucher_sale_mode_info/properties/settle_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}