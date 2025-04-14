import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("支付宝用户id，用户在支付宝的唯一标识，以 2088 开头的 16 位纯数字组成。").optional(),
  "open_id": z.string().describe("支付宝用户唯一的标识").optional()
}