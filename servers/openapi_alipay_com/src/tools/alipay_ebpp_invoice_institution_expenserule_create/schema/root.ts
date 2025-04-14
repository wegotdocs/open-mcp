import { z } from "zod"

export const inputParams = {
  "asset_share_source_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `asset_share_source_info` to the tool, first call the tool `expandSchema` with \"/properties/asset_share_source_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "consume_mode": z.string().describe("消费模式").optional(),
  "enterprise_id": z.string().describe("企业码id").optional(),
  "expense_ctrl_rule_info_list": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `expense_ctrl_rule_info_list` to the tool, first call the tool `expandSchema` with \"/properties/expense_ctrl_rule_info_list\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "expense_type_sub_category": z.string().describe("费用类型子类").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "open_rule_id": z.string().describe("开票规则id").optional(),
  "outer_source_id": z.string().describe("外部唯一标识，填写该字段可用于创建幂等，防止重复创建").optional(),
  "payment_policy": z.string().describe("支付策略").optional(),
  "personal_qrcode_mode": z.number().int().describe("个人收款码转账是否支持因公付，默认为0。可选值：0（不支持）、1（支持）").optional(),
  "standard_condition_info_list": z.array(z.object({ "rule_factor": z.string().describe("条件类型").optional(), "rule_id": z.string().describe("费控条件ID").optional(), "rule_name": z.string().describe("费控条件名称").optional(), "rule_value": z.string().describe("费控条件值").optional() })).describe("使用规则因子列表").optional(),
  "standard_desc": z.string().describe("使用规则描述").optional(),
  "standard_name": z.string().describe("费控规则名称").optional()
}