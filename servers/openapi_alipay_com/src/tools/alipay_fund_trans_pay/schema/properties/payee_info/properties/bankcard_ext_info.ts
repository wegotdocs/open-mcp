import { z } from "zod"

export const inputParams = {
  "account_type": z.string().describe("收款账户类型。\t1：对公（在金融机构开设的公司账户）\t2：对私（在金融机构开设的个人账户）").optional(),
  "bank_code": z.string().describe("银行支行联行号").optional(),
  "inst_branch_name": z.string().describe("收款银行所属支行").optional(),
  "inst_city": z.string().describe("收款银行所在市").optional(),
  "inst_name": z.string().describe("机构名称").optional(),
  "inst_province": z.string().describe("银行所在省").optional()
}