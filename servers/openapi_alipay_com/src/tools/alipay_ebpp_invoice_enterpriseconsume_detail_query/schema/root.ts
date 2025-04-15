import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "voucher_id": z.string().describe("账单凭证ID").optional()
}