import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("业务小程序id").optional(),
  "app_origin": z.string().describe("业务来源").optional(),
  "domain_account": z.string().describe("域账号（如传入则删除联系人）").optional(),
  "login_id": z.string().describe("登陆支付宝账号").optional(),
  "type": z.string().describe("成员类型").optional()
}