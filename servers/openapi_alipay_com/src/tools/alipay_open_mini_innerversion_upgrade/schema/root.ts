import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("来源类型，新接入方需要向支付宝申请专用来源，否则不予接入。").optional(),
  "bundle_id": z.string().describe("端ID，多端场景下区分不同端").optional(),
  "mini_app_id": z.string().describe("小程序ID，特殊场景专用，普通业务方无需关注该参数。").optional(),
  "template_id": z.string().describe("用于升级的模板id").optional(),
  "template_version": z.string().describe("用于升级的模板版本号，版本号必须满足 x.y.z, 且均为数字").optional()
}