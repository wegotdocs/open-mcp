import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("业务来源").optional(),
  "app_version": z.string().describe("小程序版本号").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "mini_app_id": z.string().describe("业务小程序appid").optional(),
  "oid": z.string().describe("oid").optional(),
  "operator_id": z.string().describe("操作员id").optional()
}