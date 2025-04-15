import { z } from "zod"

export const inputParams = {
  "agreement_no": z.string().describe("花芝协议号，支付宝系统中用以唯一标识用户签约记录的编号，即花芝协议号。").optional(),
  "alipay_user_id": z.string().describe("买家在支付宝的用户id").optional(),
  "open_id": z.string().describe("买家在支付宝的用户id").optional(),
  "out_request_no": z.string().describe("外部请求号").optional(),
  "partner_id": z.string().describe("商户ID").optional(),
  "quit_type": z.string().describe("用户主动意愿退出：USER_CANCEL_QUIT; 商户结算退出：SETTLE_APPLY_QUIT; 默认值为SETTLE_APPLY_QUIT；这个字段会影响用户在芝麻信用合约的状态").optional()
}