import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业ID").optional(),
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "order_id": z.string().describe("订单ID").optional(),
  "order_type": z.string().describe("订单类型").optional()
}