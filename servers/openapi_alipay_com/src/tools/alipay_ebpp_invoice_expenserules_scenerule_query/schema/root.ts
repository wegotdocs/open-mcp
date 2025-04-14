import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业码企业id").optional(),
  "standard_id": z.string().describe("费控规则ID").optional(),
  "page_num": z.number().int().describe("页数").optional(),
  "page_size": z.number().int().describe("页大小").optional()
}