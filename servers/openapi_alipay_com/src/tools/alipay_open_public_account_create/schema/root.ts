import { z } from "zod"

export const inputParams = {
  "agreement_id": z.string().describe("账户添加成功，在支付宝与其对应的协议号。如果账户重复添加，接口保证幂等依然视为添加成功，返回此前该账户在支付宝对应的协议号。其他异常该字段不存在。").optional(),
  "bind_account_no": z.string().describe("绑定帐号，建议在开发者的系统中保持唯一性").optional(),
  "display_name": z.string().describe("开发者期望在服务窗首页看到的关于该用户的显示信息，最长10个字符").optional(),
  "from_user_id": z.string().describe("要绑定的商户会员对应的支付宝userid，2088开头长度为16位的字符串").optional(),
  "open_id": z.string().describe("支付宝用户的唯一标识").optional(),
  "real_name": z.string().describe("要绑定的商户会员的真实姓名，最长10个汉字").optional(),
  "remark": z.string().describe("备注信息，开发者可以通过该字段纪录其他的额外信息").optional()
}