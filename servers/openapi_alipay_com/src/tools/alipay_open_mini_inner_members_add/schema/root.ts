import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务来源").optional(),
  "domain_account": z.string().describe("域账号（不为空时会添加联系人）").optional(),
  "login_id": z.string().describe("支付宝登陆账号").optional(),
  "mini_app_id": z.string().describe("业务appId").optional(),
  "type": z.string().describe("成员类型").optional()
}