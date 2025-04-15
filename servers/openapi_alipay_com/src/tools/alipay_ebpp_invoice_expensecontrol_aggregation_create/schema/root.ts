import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业ID").optional(),
  "aggregation_name": z.string().describe("聚合关系名称\t特殊说明：敏感词校验").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "standard_id_list": z.array(z.string()).describe("费控规则ID列表").optional()
}