import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("小程序应用ID").optional(),
  "bundle_id": z.string().describe("端标识").optional(),
  "inst_code": z.string().describe("租户标识").optional(),
  "page_num": z.number().int().describe("当前页，从1开始").optional(),
  "page_size": z.number().int().describe("每页个数").optional()
}