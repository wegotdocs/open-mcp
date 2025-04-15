import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业id").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "standard_id_list": z.array(z.string()).describe("删除的使用规则id列表").optional()
}