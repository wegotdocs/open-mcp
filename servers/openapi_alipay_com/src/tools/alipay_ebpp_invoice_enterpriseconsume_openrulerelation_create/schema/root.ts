import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invoice_rule_id": z.string().describe("开票规则ID").optional(),
  "standard_id_list": z.array(z.string()).describe("费控规则ID列表").optional()
}