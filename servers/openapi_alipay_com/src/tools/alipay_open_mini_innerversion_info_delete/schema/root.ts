import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "app_origin": z.string().describe("业务场景来源").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "app_version": z.string().describe("小程序版本号").optional(),
  "pid": z.string().describe("操作者ID，支付宝租户必填").optional(),
  "inst_code": z.string().describe("租户信息").optional()
}