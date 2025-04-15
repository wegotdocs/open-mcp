import { z } from "zod"

export const inputParams = {
  "account_id": z.string().describe("账本ID").optional(),
  "account_name": z.string().describe("账本名称").optional(),
  "account_quota": z.array(z.object({ "custom_begin_date": z.string().describe("自定义周期起始日期，精确到分钟，yyyy-MM-dd HH:mm").optional(), "custom_end_date": z.string().describe("自定义周期结束日期，精确到分钟，yyyy-MM-dd HH:mm").optional(), "quota_dimension": z.string().describe("额度维度\t单笔上限：ONCE\t日：DAY\t月：MONTH\t季度：QUARTER\t年：YEAR\t终身：LIFETIME\t一次性使用额度：ONLYONE").optional(), "quota_total": z.string().describe("协议额度").optional() })).describe("账户额度").optional(),
  "agreement_no": z.string().describe("授权协议号").optional(),
  "authorized_rule": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `authorized_rule` to the tool, first call the tool `expandSchema` with \"/properties/authorized_rule\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "biz_scene": z.string().describe("场景码").optional(),
  "product_code": z.string().describe("产品码").optional()
}