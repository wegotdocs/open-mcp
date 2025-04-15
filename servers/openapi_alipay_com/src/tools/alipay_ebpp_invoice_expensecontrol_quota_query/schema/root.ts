import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "owner_id": z.string().describe("额度所属者ID").optional(),
  "owner_open_id": z.string().describe("额度所属者开放ID").optional(),
  "owner_type": z.string().describe("额度所属者类型").optional(),
  "page_num": z.number().int().describe("页码").optional(),
  "page_size": z.number().int().describe("每页条数").optional(),
  "quota_id_list": z.array(z.string()).describe("额度ID列表").optional(),
  "quota_type": z.string().describe("额度类型").optional(),
  "target_id": z.string().describe("额度维度ID").optional(),
  "target_type": z.string().describe("额度维度").optional()
}