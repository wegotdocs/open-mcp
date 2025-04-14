import { z } from "zod"

export const inputParams = {
  "cert_no": z.string().describe("证件号").optional(),
  "cert_type": z.string().describe("证件类型。暂仅支持 IDENTITY_CARD （身份证）。").optional(),
  "ext_info": z.string().describe("拓展字段,JSON格式").optional(),
  "logon_id": z.string().describe("支付宝登录名").optional(),
  "mobile": z.string().describe("手机号码").optional(),
  "user_name": z.string().describe("真实姓名").optional()
}