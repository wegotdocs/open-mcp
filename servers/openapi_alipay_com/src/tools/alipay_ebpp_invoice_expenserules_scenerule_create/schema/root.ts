import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("共同账号ID").optional(),
  "agreement_no": z.string().describe("授权签约协议号").optional(),
  "effective_end_date": z.string().describe("有效期截止").optional(),
  "effective_start_date": z.string().describe("有效期起始").optional(),
  "employee_list": z.array(z.string()).describe("切换open_id前请使用：员工支付宝uid列表\t特殊说明：单次传入的最大员工数为50，后续通过修改费控规则员工接口进行员工调整").optional(),
  "employee_open_id_list": z.array(z.string()).describe("切换open_id后请使用：员工open_id/企业码员工ID列表 特殊说明：单次传入的最大员工数为50，后续通过修改费控规则员工接口进行员工调整").optional(),
  "enterprise_id": z.string().describe("企业码企业id").optional(),
  "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("费控条件列表\t特殊说明：\t1）至少存在日额度（QUOTA_DAY）、月额度（QUOTA_MONTH）、有效期总额度（QUOTA_TOTAL）三者中的一个额度条件；\t2）如果费用类型为MEAL，费控维度商户（MEAL_MERCHANT）和商户类型（MCC）对应的费控条件必须存在其一且不能同时存在；\t3）如果费用类型为METRO，费控维度地铁卡类型（CARD_TYPE）对应的费控条件必须存在；\t4）如果因公场景为OVERTIME，费控维度时间段（ALARM_CLOCK_TIME）对应的费控条件必须存在；\t5）不能存在重复的费控维度对应的费控条件；\t6）非MEAL费用类型，商户仅支持MERCHANT，不支持MEAL_MERCHANT").optional(),
  "expense_type": z.string().describe("费用类型").optional(),
  "payment_policy": z.string().describe("当笔消费金额大于规则可用余额时，用于控制支付策略，该字段缺省时采取因公账户和个人账户组合支付策略， 枚举值：PERSONAL（全部个人账户支付）, COMBINATION（因公账户和个人账户组合支付）").optional(),
  "scene_type": z.string().describe("因公场景").optional(),
  "standard_desc": z.string().describe("费控规则说明\t特殊说明：敏感词校验").optional(),
  "standard_name": z.string().describe("费控规则名称\t特殊说明：\t1）敏感词校验\t2）不能重复，若需要重复联系支持人员定向放开").optional()
}