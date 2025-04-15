import { z } from "zod"

export const inputParams = {
  "email": z.string().describe("邮箱地址").optional(),
  "invoice_content": z.string().describe("发票内容，配送服务费").optional(),
  "invoice_fee": z.string().describe("发票金额").optional(),
  "invoice_title": z.string().describe("发票抬头，如支付宝（杭州）信息技术有限公司").optional(),
  "invoice_type": z.number().int().describe("发票类型，0：默认电子发票").optional(),
  "phone": z.string().describe("手机号码").optional(),
  "receiver": z.string().describe("收件人姓名").optional(),
  "tax_number": z.string().describe("税号").optional(),
  "title_type": z.number().int().describe("抬头类型，0：企业单位，1：个人/非企业").optional()
}