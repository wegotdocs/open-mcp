import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本").optional(),
  "bundle_id": z.string().describe("端信息").optional(),
  "mini_app_id": z.string().describe("小程序ID，仅特殊场景使用，普通业务方无需关注该参数。").optional(),
  "package_type": z.string().describe("打包类型。预发包和覆盖率包").optional(),
  "pid": z.string().describe("pid. 伙伴链路（app_origin='HUOBAN'）时必填").optional()
}