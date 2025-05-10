import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("每页行数").optional()
}