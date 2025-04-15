import { z } from "zod"

export const inputParams = {
  "product_code": z.string().describe("产品码").optional(),
  "biz_scene": z.string().describe("业务场景").optional(),
  "account_id": z.string().describe("账户ID").optional(),
  "member_id": z.string().describe("员工ID").optional(),
  "member_open_id": z.string().describe("员工的openid").optional(),
  "operate_role": z.string().describe("角色：创建方(CREATOR)、参与方(PARTICIPANT)").optional(),
  "agreement_no": z.string().describe("授权协议号").optional()
}