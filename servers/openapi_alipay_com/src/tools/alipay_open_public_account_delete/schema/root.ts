import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("协议号，商户会员在支付宝服务窗账号中的唯一标识，与bind_account_no不能同时为空").optional(),
  "bind_account_no": z.string().describe("绑定帐号，建议在开发者的系统中保持唯一性，与agreement_id不能同时为空").optional(),
  "from_user_id": z.string().describe("绑定用户的支付宝userid，2088开头16位长度的字符串，与agreementId不能同时为空").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional()
}