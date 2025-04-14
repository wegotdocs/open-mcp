import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业共同账户id").optional(),
  "adapter_type": z.string().describe("制度适用范围类型").optional(),
  "add_owner_id_list": z.array(z.string()).describe("增加适配id列表").optional(),
  "add_owner_open_id_list": z.array(z.string()).describe("增加适配开放id列表").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "owner_type": z.string().describe("归属类型").optional(),
  "remove_owner_id_list": z.array(z.string()).describe("删除适配id列表").optional(),
  "remove_owner_open_id_list": z.array(z.string()).describe("删除适配开放id列表").optional()
}