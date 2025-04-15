import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "order_type": z.string().describe("支付宝订单类型。公共事业缴纳JF,信用卡还款HK").optional(),
  "merchant_order_no": z.string().describe("输出机构的业务流水号，需要保证唯一性。").optional()
}