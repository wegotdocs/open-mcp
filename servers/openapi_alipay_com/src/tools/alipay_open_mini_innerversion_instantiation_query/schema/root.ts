import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("来源类型，新接入方需要向支付宝申请专用来源，否则不予接入，申请方式请参见接入手册。").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "mini_app_id": z.string().describe("小程序ID，特殊场景专用，普通业务方无需关注该参数。").optional(),
  "app_version": z.string().describe("实例化小程序版本号").optional()
}