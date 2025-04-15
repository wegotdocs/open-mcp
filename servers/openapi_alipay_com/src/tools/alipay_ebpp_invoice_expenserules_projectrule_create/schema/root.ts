import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("共同账户id").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "effective_end_date": z.string().describe("有效期截止（yyyy-MM-dd HH:mm:ss，必须大于起始时间）").optional(),
  "effective_start_date": z.string().describe("有效期起始（yyyy-MM-dd HH:mm:ss，必须小于截止时间）").optional(),
  "employee_list": z.array(z.string()).describe("切换open_id前使用此字段：员工支付宝ID列表\t特殊说明：单次传入的最大员工数为50，后续通过修改项目的员工列表接口进行员工调整").optional(),
  "employee_open_id_list": z.array(z.string()).describe("切换open_id后使用此字段：员工open_id列表 特殊说明：单次传入的最大员工数为50，后续通过修改项目的员工列表接口进行员工调整").optional(),
  "expense_ctrl_rule_info_group_list": z.array(z.object({ "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("费控条件列表").optional(), "expense_type": z.string().describe("费用类型\t特殊说明：仅支持费用类型DEFAULT").optional(), "group_id": z.string().describe("费控规则ID").optional(), "group_name": z.string().describe("费控规则名称\t约束：\t1）敏感词校验\t2）不能重复").optional() })).describe("费控规则列表").optional(),
  "project_name": z.string().describe("项目名称\t约束：\t1）敏感词校验\t2）不能重复").optional()
}