import { z } from "zod"

export const inputParams = {
  "plugin_id": z.string().describe("插件ID").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "plugin_version": z.string().describe("查询版本号").optional(),
  "app_origin": z.string().describe("业务来源").optional()
}