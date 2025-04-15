import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "user_id": z.string().describe("支付宝用户id").optional(),
  "open_id": z.string().describe("支付宝用户id").optional()
}