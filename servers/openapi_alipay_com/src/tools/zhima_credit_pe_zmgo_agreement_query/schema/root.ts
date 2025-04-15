import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号，即花芝轻会员。传入该参数，会忽略其它所有参数。").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional()
}