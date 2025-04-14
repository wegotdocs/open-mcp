import { z } from "zod"

export const inputParams = {
  "app_origin": z.string().describe("来源类型，新接入方需要向支付宝申请专用来源，否则不予接入。").optional(),
  "app_version": z.string().describe("格式为: x.y.z，其中x、y、z均为整型数字，版本不能重复构建，且新版本号必须高于旧版本").optional(),
  "bundle_id": z.string().describe("端id").optional(),
  "ext": z.string().describe("模板的配置参数，完整内容请参见：https://docs.alipay.com/mini/isv/ortga1").optional(),
  "mini_app_id": z.string().describe("小程序ID，特殊场景专用，普通业务方无需关注该参数。").optional(),
  "template_id": z.string().describe("模板id，模板必须已经处于上架/下架状态").optional(),
  "template_version": z.string().describe("模板版本，必须处于上架/下架状态。如果为空，默认取当前在架，或者最新下架的版本。").optional()
}