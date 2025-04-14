import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业ID").optional(),
  "pay_no": z.string().describe("支付宝账单号").optional(),
  "query_options": z.array(z.string()).describe("查询选项").optional()
}