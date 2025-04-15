import { z } from "zod"

export const inputParams = {
  "effective": z.string().describe("是否启用，\"0\"为停用，\"1\"为启用；\t如果target_type指定INSTITUTION，则与制度一致,无需填写").optional(),
  "effective_period": z.string().describe("生效周期，时间不限格式：\"{\\\"all\\\":true}\"").optional(),
  "enterprise_id": z.string().describe("企业ID").optional(),
  "invalid_mode": z.number().int().describe("是否可累计：0（不可累计）、1（可累计），2（累计天数）、3（累计到指定日期）余额只允许可累计，按城市发放只允许不可累计，设置了生效周期只允许不可累计").optional(),
  "invalid_mode_value": z.string().describe("累计值（预留字段）").optional(),
  "issue_amount_value": z.string().describe("发放金额，单位（元）；\t按城市不同发放标准示例值：\"[{\\\"cities\\\":[\\\"321000\\\",\\\"321100\\\"],\\\"amount\\\":\\\"50\\\"},{\\\"cities\\\":[\\\"321200\\\",\\\"321300\\\"],\\\"amount\\\":\\\"150\\\"}]\"\t统一标准发放示例值：\"200\"").optional(),
  "issue_end_date": z.string().describe("发放规则的截止时间\t如果target_type指定INSTITUTION，则使用制度有效期结束时间，无需填写").optional(),
  "issue_rule_name": z.string().describe("发放规则名称").optional(),
  "issue_start_date": z.string().describe("发放规则的开始时间\t如果target_type指定INSTITUTION，则使用制度有效期起始时间，无需填写").optional(),
  "issue_type": z.string().describe("发放类型").optional(),
  "outer_source_id": z.string().describe("填写该字段可用于创建幂等，防止重复创建").optional(),
  "quota_type": z.string().describe("额度类型，枚举：COUPON（点券）、CAP（余额）").optional(),
  "share_mode": z.number().int().describe("是否可转赠：0（不可转赠）、1（可转赠）").optional(),
  "target_id": z.string().describe("发放规则关联的目标值\ttarget_type为制度时：制度id").optional(),
  "target_type": z.string().describe("发放规则关联的目标类型").optional()
}