import { z } from "zod"

export const inputParams = {
  "target_app_id": z.string().describe("目标isv应用ID").optional(),
  "template_id": z.string().describe("合同模板id。通过<a href =\"https://opendocs.alipay.com/apis/api_50/alipay.eco.doc.template.create\">创建合同模版</a>（alipay.eco.doc.template.create）接口获取。").optional()
}