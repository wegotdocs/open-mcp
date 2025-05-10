import { z } from "zod"

export const inputParams = {
  "consult_mode": z.string().describe("费控咨询模式：\t0-支付宝内部计算规则可用金额\t1-咨询外部服务商规则可用金额").optional(),
  "effective": z.string().describe("制度是否启用").optional(),
  "effective_end_date": z.string().describe("制度生效结束时间（可空），最小粒度为天，最早是当日").optional(),
  "effective_start_date": z.string().describe("制度生效起始时间").optional(),
  "enterprise_id": z.string().describe("企业id").optional(),
  "institution_desc": z.string().describe("制度描述").optional(),
  "institution_id": z.string().describe("制度id").optional(),
  "institution_name": z.string().describe("制度名称").optional(),
  "modify_issue_rule_detail_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `modify_issue_rule_detail_info` to the tool, first call the tool `expandSchema` with \"/properties/modify_issue_rule_detail_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "modify_scope_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `modify_scope_info` to the tool, first call the tool `expandSchema` with \"/properties/modify_scope_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "modify_standard_detail_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `modify_standard_detail_info` to the tool, first call the tool `expandSchema` with \"/properties/modify_standard_detail_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}