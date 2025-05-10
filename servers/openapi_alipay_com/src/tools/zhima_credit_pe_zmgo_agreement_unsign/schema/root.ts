import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("支付宝系统中用以唯一标识用户签约记录的编号。").optional(),
  "alipay_user_id": z.string().describe("支付宝的用户id").optional(),
  "open_id": z.string().describe("支付宝的用户id").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "quit_type": z.string().describe("quit_type为USER_CANCEL_QUIT或者SETTLE_APPLY_QUIT").optional()
}