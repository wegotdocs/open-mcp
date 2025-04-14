import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("支付宝用户ID").optional(),
  "open_id": z.string().describe("用户UserId在应用AppId下的唯一用户标识").optional(),
  "out_order_no": z.string().describe("商户代扣业务流水").optional()
}