import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业ID").optional(),
  "action": z.string().describe("修改操作\t枚举值：MODIFY_RULE（修改费控条件），仅支持MODIFY_RULE").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "expense_ctrl_rule_info_group_list": z.array(z.object({ "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("费控条件列表").optional(), "expense_type": z.string().describe("费用类型\t特殊说明：仅支持费用类型DEFAULT").optional(), "group_id": z.string().describe("费控规则ID").optional(), "group_name": z.string().describe("费控规则名称\t约束：\t1）敏感词校验\t2）不能重复").optional() })).describe("费控规则列表").optional(),
  "project_id": z.string().describe("项目ID").optional()
}