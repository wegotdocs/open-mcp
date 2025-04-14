import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "app_origin": z.string().describe("业务来源场景").optional(),
  "pid": z.string().describe("小程序主体").optional()
}