import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("企业ID").optional(),
  "action": z.string().describe("修改操作\t枚举值：\tADD_RULE（新增费控条件），DELETE_RULE（删除费控条件），MODIFY_RULE（修改费控条件），MODIFY_STANDARD（修改费控规则基本信息）").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "effective_end_date": z.string().describe("有效期截止\t特殊说明：修改费控规则基本信息时必传").optional(),
  "effective_start_date": z.string().describe("有效期起始\t特殊说明：修改费控规则基本信息时必传").optional(),
  "enterprise_id": z.string().describe("企业码企业id").optional(),
  "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("费控规则条件列表 特殊说明：新增费控条件/修改费控条件/删除费控条件操作时必填").optional(),
  "payment_policy": z.string().describe("当笔消费金额大于规则可用余额时，用于控制支付策略，该字段缺省时采取因公账户和个人账户组合支付策略， 枚举值：PERSONAL（全部个人账户支付）, COMBINATION（因公账户和个人账户组合支付）").optional(),
  "standard_desc": z.string().describe("费控规则说明\t特殊说明：\t1）敏感词校验\t2）修改费控规则基本信息时必传").optional(),
  "standard_id": z.string().describe("费控规则ID").optional(),
  "standard_name": z.string().describe("费控规则名称\t特殊说明：\t1）敏感词校验\t2）修改费控规则基本信息时必传\t3）不能重复，若需要重复联系支持人员定向放开").optional()
}