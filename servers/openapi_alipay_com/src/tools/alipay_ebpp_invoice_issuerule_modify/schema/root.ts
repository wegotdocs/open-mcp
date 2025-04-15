import { z } from "zod"

export const inputParams = {
  "action": z.string().describe("修改类型，枚举：\tMODIFY_BASIC_INFO（修改发放规则基本信息）").optional(),
  "effective": z.string().describe("是否启用，\"0\"为停用，\"1\"为启用；").optional(),
  "effective_period": z.string().describe("生效周期（不传则不修改），不限：\"{\\\"all\\\":true}\"").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invalid_mode": z.number().int().describe("是否可累计（不传则不修改）可选值：0（不可累计）、1（可累计），2（累计天数），3（累计到固定时间）").optional(),
  "invalid_mode_value": z.string().describe("累计值").optional(),
  "issue_amount_value": z.string().describe("发放金额（不传则不修改），单位（元）").optional(),
  "issue_end_date": z.string().describe("发放规则的截止时间").optional(),
  "issue_rule_id": z.string().describe("发放规则id").optional(),
  "issue_rule_name": z.string().describe("发放规则名称（不传则不修改）").optional(),
  "issue_start_date": z.string().describe("发放规则的开始时间").optional(),
  "issue_type": z.string().describe("发放类型").optional(),
  "quota_type": z.string().describe("额度类型").optional(),
  "share_mode": z.number().int().describe("是否可转赠（不传则不修改），可选值：0（不可转赠）、1（可转赠），默认为0，按城市发放不支持可转赠").optional(),
  "target_id": z.string().describe("发放规则关联的目标值 target_type为制度时：制度id").optional(),
  "target_type": z.string().describe("发放规则关联的目标类型").optional()
}