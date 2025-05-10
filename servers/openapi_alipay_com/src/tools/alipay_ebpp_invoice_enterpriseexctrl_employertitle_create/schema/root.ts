import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户id").optional(),
  "address": z.string().describe("企业地址").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "bank_account": z.string().describe("开户行账号").optional(),
  "bank_name": z.string().describe("开户行名称").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "tax_register_no": z.string().describe("税号").optional(),
  "telephone": z.string().describe("电话").optional(),
  "title_name": z.string().describe("企业抬头名称").optional()
}