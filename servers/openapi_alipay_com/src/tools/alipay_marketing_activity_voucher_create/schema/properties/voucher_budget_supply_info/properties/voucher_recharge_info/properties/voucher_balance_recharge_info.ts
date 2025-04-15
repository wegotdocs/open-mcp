import { z } from "zod"

export const inputParams = {
  "amount": z.string().describe("支付宝余额充值金额\t 限制： \t 1.币种为人民币，单位元。 \t 2. 总预算=优惠金额*总发券张数").optional(),
  "logon_id": z.string().describe("出资的商户支付宝登录账号").optional(),
  "partner_id": z.string().describe("出资的商户支付宝ID").optional()
}