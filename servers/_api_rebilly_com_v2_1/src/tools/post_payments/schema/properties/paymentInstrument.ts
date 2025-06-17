import { z } from "zod"

export const inputParamsSchema = {
  "method": z.enum(["ach","cash","payment-card","paypal","Alipay","China UnionPay","Flexepin","Gpaysafe","Jeton","OchaPay","SMSVoucher","UPayCard","WeChat Pay"]).describe("The payment method")
}