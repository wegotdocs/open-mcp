import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "outer_source_id": z.string().describe("外部唯一标识").optional(),
  "owner_type": z.string().describe("适配id类型").optional()
}