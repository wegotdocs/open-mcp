import { z } from "zod"

export const inputParams = {
  "login_id": z.string().describe("收款账号，需要绑定的收款支付宝账号，请勿与 pid 同时传入。").optional(),
  "pid": z.string().describe("支付宝用户id，2088开头的16位长度字符串，请勿与 login_id 同时传入。").optional()
}