import { z } from "zod"

export const inputParams = {
  "template_no": z.string().describe("模板ID，由创建模板接口返回结果提供").optional(),
  "partner_id": z.string().describe("商户ID").optional()
}