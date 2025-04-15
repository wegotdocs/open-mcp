import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本").optional(),
  "beta_app_id_list": z.array(z.string()).describe("待邀测应用列表，灰度插件时使用，如无邀测必要请不要传入").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "gray_strategy": z.string().describe("灰度值").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "pid": z.string().describe("小程序所属PID").optional()
}