import { z } from "zod"

export const inputParams = {
  "ext_info": z.string().describe("扩展字段").optional(),
  "payment_amount": z.string().describe("支付金额，单位为该币种基础计价单位，如人民币为：元").optional(),
  "payment_currency": z.string().describe("支付币种（元）").optional(),
  "settlement_amount": z.string().describe("清算金额，单位为该币种基础计价单位，如人民币为：元").optional(),
  "settlement_currency": z.string().describe("清算币种（元）").optional(),
  "trans_amount": z.string().describe("转账金额，单位为该币种基础计价单位，如人民币为：元").optional(),
  "trans_currency": z.string().describe("转账币种（元）").optional()
}