import { z } from "zod"

export const inputParams = {
  "cert_no": z.string().describe("证件号").optional(),
  "cert_type": z.string().describe("证件类型。").optional(),
  "ext_info": z.array(z.object({ "ext_key": z.string().describe("键值").optional(), "ext_value": z.string().describe("值").optional() })).describe("扩展信息").optional(),
  "mobile": z.string().describe("手机号").optional(),
  "name": z.string().describe("姓名").optional(),
  "open_id": z.string().describe("支付宝用户openId").optional(),
  "user_id": z.string().describe("支付宝用户ID，可以通过支付结果通知、用户授权等渠道获取").optional()
}