import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "role_id": z.string().describe("商户ID").optional(),
  "pid": z.string().describe("商户ID").optional(),
  "shop_id": z.string().describe("门店ID").optional(),
  "expense_type": z.string().describe("费用类型\tMEAL - 工作餐").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("每页行数（最大100）").optional()
}