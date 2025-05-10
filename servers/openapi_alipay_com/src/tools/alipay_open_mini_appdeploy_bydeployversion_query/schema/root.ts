import { z } from "zod"

export const inputParams = {
  "bundle_id": z.string().describe("客户端标识").optional(),
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "inst_code": z.string().describe("租户").optional(),
  "deploy_version": z.string().describe("发布标识").optional()
}