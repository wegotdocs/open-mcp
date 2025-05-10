import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("用户的支付宝用户号，2088开头。").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional()
}