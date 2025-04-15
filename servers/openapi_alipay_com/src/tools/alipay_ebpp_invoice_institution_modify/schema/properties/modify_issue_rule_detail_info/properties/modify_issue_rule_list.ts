import { z } from "zod"

export const inputParams = {
  "effective_period": z.string().describe("发放资产的有效时间段，该字段为空时，默认为不限制。当发放资产为余额时，仅支持设置为不限，当发放资产为点券时，可支持设置多种值。具体传值格式请参考文档 <a href=\"https://opendocs.alipay.com/pre-open/07nwcs\">接入文档</a>").optional(),
  "issue_rule_id": z.string().describe("发放规则id").optional(),
  "issue_rule_name": z.string().describe("发放规则名称").optional(),
  "issue_type": z.string().describe("额度发放周期").optional(),
  "quota_type": z.string().describe("发放规则发放的额度类型").optional()
}