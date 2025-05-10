import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("支付宝用户的userid，2088开头长度为16位的字符串").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional()
}