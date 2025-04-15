import { z } from "zod"

export const inputParams = {
  "end_date": z.string().describe("商标有效期(结束日期)").optional(),
  "reg_materials": z.array(z.string()).describe("商标注册证书信息(当前只支持图片类型，请调用alipay.open.mini.miniapp.brand.upload接口上传图片,可以上传多个商标注册证书信息)").optional(),
  "reg_number": z.string().describe("商标注册号").optional(),
  "registrant": z.string().describe("商标注册人").optional(),
  "start_date": z.string().describe("商标有效期(开始日期)").optional()
}