import { z } from "zod"

export const inputParams = {
  "user_id": z.string().describe("被删除成员的支付宝账户唯一标识，以2088开头。").optional(),
  "open_id": z.string().describe("被删除成员的openId。").optional(),
  "role": z.string().describe("被删除成员的角色类型").optional()
}