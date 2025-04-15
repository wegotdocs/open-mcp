import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户id").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "title_id": z.string().describe("抬头ID").optional()
}