import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号。").optional(),
  "period": z.string().describe("协议结算周期，使用支付宝端回传的周期信息。").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional()
}