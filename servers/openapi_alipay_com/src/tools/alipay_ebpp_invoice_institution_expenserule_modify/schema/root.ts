import { z } from "zod"

export const inputParams = {
  "action": z.string().describe("修改使用规则").optional(),
  "asset_share_source_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `asset_share_source_info` to the tool, first call the tool `expandSchema` with \"/properties/asset_share_source_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "consume_mode": z.string().describe("该使用规则支持的资产消费模式，不填写则为默认模式，默认模式下有余额时使用余额，没有余额则使用规则中的限额，点券模式为只能使用点券，点券+余额模式为可以使用点券和余额。").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "expense_ctrl_rule_info_list": z.array(z.object({ "rule_factor": z.string().describe("费控维度").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_operator": z.string().describe("费控条件操作符\t枚举值：\tLT(\"<\",\"小于\")\tLE(\"<=\",\"小于等于\")\tEQ(\"=\",\"等于\")\tNE(\"!=\",\"不等于\")\tGE(\">=\",\"大于等于\")\tGT(\">\",\"大于\")").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("使用规则条件列表（已废弃）").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "open_rule_id": z.string().describe("开票规则id").optional(),
  "payment_policy": z.string().describe("当笔消费金额大于规则可用余额时，用于控制支付策略").optional(),
  "personal_qrcode_mode": z.number().int().describe("个人收款码转账是否支持因公付，默认为0。可选值：0（不支持）、1（支持）").optional(),
  "standard_condition_info_list": z.array(z.object({ "rule_factor": z.string().describe("条件类型").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("规则条件列表").optional(),
  "standard_desc": z.string().describe("规则描述").optional(),
  "standard_id": z.string().describe("使用规则id").optional(),
  "standard_name": z.string().describe("规则名称").optional()
}