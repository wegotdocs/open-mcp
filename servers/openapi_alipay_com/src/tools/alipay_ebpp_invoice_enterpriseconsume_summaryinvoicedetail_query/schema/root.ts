import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业 ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "summary_id": z.string().describe("开票批次 ID").optional()
}