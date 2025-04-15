import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "app_version": z.string().describe("版本号").optional(),
  "bundle_id": z.string().describe("com.alipay.alipaywallet:支付包").optional(),
  "inst_code": z.string().describe("alipay:支付宝").optional()
}