import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("小程序ID").optional(),
  "bundle_id": z.string().describe("端标识").optional(),
  "inst_code": z.string().describe("租户").optional(),
  "app_version": z.string().describe("小程序版本").optional()
}