import { z } from "zod"

export const inputParams = {
  "logon_id": z.string().describe("出资的支付宝登录账号\t限制:\t1、登录账号和用户ID必须且只能二选一").optional(),
  "user_id": z.string().describe("出资的支付宝用户id\t限制:\t1、登录账号和用户ID必须且只能二选一").optional()
}