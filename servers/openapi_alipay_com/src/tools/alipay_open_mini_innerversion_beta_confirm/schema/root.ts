import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务来源").optional(),
  "memo": z.string().describe("拒绝理由").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "operate": z.string().describe("操作：pass/reject。接受或者拒绝").optional(),
  "pid": z.string().describe("小程序所属PID").optional(),
  "plugin_id": z.string().describe("要确认邀测结果的插件appid").optional()
}