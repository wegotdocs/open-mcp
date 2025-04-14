import { z } from "zod"

export const inputParams = {
  "build_package_id": z.string().describe("包管理ID，用于查询打包状态").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "build_version": z.string().describe("小程序版本").optional(),
  "inst_code": z.string().describe("租户id").optional(),
  "bundle_id": z.string().describe("端信息").optional()
}