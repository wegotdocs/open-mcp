import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "downgrade": z.boolean().describe("否服务降级，如果降级，拉包策略如果端上有本地包，则使用本地包打开，同时异步下载新包，待下次打开则使用新包").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数").optional(),
  "pid": z.string().describe("小程序所属PID").optional(),
  "release_type": z.string().describe("normal默认普通发布，high 高保发布").optional()
}