import { z } from "zod"

export const inputParams = {
  "app_logo": z.string().describe("服务发布logo").optional(),
  "app_origin": z.string().describe("业务来源").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "pid": z.string().describe("小程序模板所属PID").optional(),
  "sub_title": z.string().describe("服务子标题").optional(),
  "title": z.string().describe("服务名称").optional()
}