import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "user_id": z.string().describe("蚂蚁统一会员ID").optional(),
  "open_id": z.string().describe("经度").optional(),
  "device_token": z.string().describe("设备token").optional()
}