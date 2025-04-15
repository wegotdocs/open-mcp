import { z } from "zod"

export const inputParams = {
  "alipay_deduct_agreement": z.string().describe("支付宝用户签约协议号").optional(),
  "alipay_deduct_product_code": z.string().describe("支付宝代扣产品码").optional(),
  "alipay_deduct_scene": z.string().describe("支付宝代扣场景码").optional(),
  "close_reason": z.string().describe("关闭连续购买原因。").optional(),
  "cycle_type": z.string().describe("用户开通连续购买类型。").optional(),
  "open_status": z.string().describe("开通连续购买状态。").optional()
}