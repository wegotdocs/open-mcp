import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("来源").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "mini_app_id": z.string().describe("小程序应用 ID").optional(),
  "plugin_dev_version": z.string().describe("插件研发版本").optional(),
  "plugin_id": z.string().describe("插件id").optional(),
  "strategy_value": z.string().describe("灰度值").optional()
}