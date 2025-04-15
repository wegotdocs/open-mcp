import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("来源").optional(),
  "mini_app_id": z.string().describe("小程序应用 ID，").optional(),
  "plugin_id": z.string().describe("插件id").optional(),
  "sync_mode": z.string().describe("模式，SYNC/NONE").optional()
}