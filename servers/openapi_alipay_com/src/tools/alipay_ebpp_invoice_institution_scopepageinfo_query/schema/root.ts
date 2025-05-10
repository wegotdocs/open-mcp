import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户id（该字段将废弃，不建议使用，可用enterprise_id字段替换）(该字段将废弃，不建议使用，可用enterprise_id字段替换)").optional(),
  "agreement_no": z.string().describe("授权签约协议号（该字段将废弃，不建议使用，可用enterprise_id字段替换）(该字段将废弃，不建议使用，可用enterprise_id字段替换)").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "owner_type": z.string().describe("适配id类型").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("页大小").optional()
}