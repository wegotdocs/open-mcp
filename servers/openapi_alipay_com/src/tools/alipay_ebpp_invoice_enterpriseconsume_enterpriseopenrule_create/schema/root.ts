import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "bill_month_day": z.number().int().describe("账期结束日期").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invoice_rule_name": z.string().describe("开票规则名称").optional(),
  "invoice_title_id": z.string().describe("发票抬头").optional(),
  "open_mode": z.string().describe("开票模式").optional(),
  "receive_address": z.string().describe("收件人地址").optional(),
  "receive_name": z.string().describe("收件人姓名").optional(),
  "receive_phone": z.string().describe("收件人手机号").optional(),
  "seller_type": z.string().describe("销方类型").optional(),
  "tag": z.string().describe("开票规则标记").optional()
}