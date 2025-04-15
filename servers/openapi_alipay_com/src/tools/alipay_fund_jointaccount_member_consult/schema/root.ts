import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("协议号").optional(),
  "business_params": z.string().describe("扩展参数，如需使用请联系支付宝开放同学").optional(),
  "open_id_list": z.array(z.string()).describe("要检查的员工openId").optional(),
  "user_id_list": z.array(z.string()).describe("要检查的员工ID").optional()
}