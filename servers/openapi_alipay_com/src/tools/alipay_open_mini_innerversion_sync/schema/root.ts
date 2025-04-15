import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务参数来源").optional(),
  "app_version": z.string().describe("推送的小程序版本号").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "dev_id": z.string().describe("操作人ID").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "sync_type": z.string().describe("同送方式").optional()
}