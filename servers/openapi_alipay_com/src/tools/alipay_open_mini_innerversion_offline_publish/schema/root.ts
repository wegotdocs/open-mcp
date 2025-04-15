import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("版本号").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "pid": z.string().describe("小程序所属PID").optional()
}