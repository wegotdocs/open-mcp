import { z } from "zod"

export const inputParams = {
  "auth_ids": z.array(z.string()).describe("授权方身份证明(当前只支持图片类型，请调用alipay.open.mini.miniapp.brand.upload接口上传图片,可以上传多个授权方身份证明)").optional(),
  "auth_materials": z.array(z.string()).describe("授权有效资质(当前只支持图片类型，请调用alipay.open.mini.miniapp.brand.upload接口上传图片，可以上传多个授权有效资质)").optional(),
  "auth_name": z.string().describe("被授权人名称").optional(),
  "end_date": z.string().describe("授权有效期(结束日期)").optional(),
  "start_date": z.string().describe("授权有效期(开始日期)").optional()
}