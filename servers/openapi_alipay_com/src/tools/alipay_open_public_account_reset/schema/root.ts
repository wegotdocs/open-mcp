import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("需要重置的协议号，商户会员在支付宝生活号账号中的唯一标识。").optional(),
  "bind_account_no": z.string().describe("绑定帐号，建议在开发者的系统中保持唯一性").optional(),
  "display_name": z.string().describe("商户期望在生活号首页看到的关于该用户的显示信息，最长10个字符。\t").optional(),
  "from_user_id": z.string().describe("要绑定的商户会员对应的支付宝唯一标识，2088开头长度为16位的字符串。\t").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional(),
  "real_name": z.string().describe("要绑定的商户会员的真实姓名，最长10个汉字").optional(),
  "remark": z.string().describe("备注信息，开发者可以通过该字段纪录其他的额外信息").optional()
}