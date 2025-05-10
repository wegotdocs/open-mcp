import { z } from "zod"

export const inputParams = {
  "activity_id": z.string().describe("活动id").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。 幂等作用： 参数不变的情况下，再次请求返回与上一次相同的结果。 外部接入方需保证业务单号唯一。").optional(),
  "trade_no": z.string().describe("支付宝支付下单时的商户订单号，欲与该商家券关联的支付宝支付").optional(),
  "voucher_code": z.string().describe("商家券券码。\t限制:\t券码必须已发放给用户。").optional()
}