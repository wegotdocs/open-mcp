import { z } from "zod"

export const inputParams = {
  "biz_type": z.string().describe("商户在芝麻GO配置的业务身份编码").optional(),
  "contact": z.string().describe("商家客服电话").optional(),
  "isv_pid": z.string().describe("运营商商户支付宝ID。若非ISV代理模式，也就是商户自运营模式，此属性取值与partner_id一致。").optional(),
  "merchant_custom_logo": z.string().describe("商户LOGO").optional(),
  "out_biz_no": z.string().describe("外部业务单号，供幂等使用，需保证每次请求的值都不同").optional(),
  "partner_id": z.string().describe("商户的支付宝ID，即为此商户创建芝麻GO模板").optional(),
  "template_name": z.string().describe("芝麻GO模板名称").optional(),
  "template_no": z.string().describe("模板编号").optional()
}