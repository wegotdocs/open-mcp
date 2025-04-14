import { z } from "zod"

export const inputParams = {
  "enterprise_id": z.string().describe("企业ID").optional(),
  "issue_rule_id_list": z.array(z.string()).describe("需要删除的发放规则id列表").optional(),
  "target_id": z.string().describe("目标值id").optional(),
  "target_type": z.string().describe("发放规则关联的目标类型").optional()
}