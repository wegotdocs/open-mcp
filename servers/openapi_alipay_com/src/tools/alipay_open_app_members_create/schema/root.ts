import { z } from "zod"

export const inputParams = {
  "logon_id": z.string().describe("支付宝登录账号。").optional(),
  "role": z.string().describe("为成员添加的角色类型").optional()
}