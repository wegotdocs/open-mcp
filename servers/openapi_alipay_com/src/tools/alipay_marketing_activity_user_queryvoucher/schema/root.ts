import { z } from "zod"

export const inputParams = {
  "merchant_id": z.string().describe("商户 PID，默认为当前接口调用商户。").optional(),
  "user_id": z.string().describe("支付宝user_id账号").optional(),
  "open_id": z.string().describe("领券的支付宝用户openId").optional(),
  "activity_id": z.string().describe("活动id").optional(),
  "voucher_id": z.string().describe("用户券 id。支付宝为用户优惠券唯一分配的 id。").optional(),
  "voucher_code": z.string().describe("用户领取的商家券券码。").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式。").optional()
}