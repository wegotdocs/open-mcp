import { z } from "zod"

export const inputParams = {
  "custom_begin_date": z.string().describe("自定义周期起始日期，精确到分钟，yyyy-MM-dd HH:mm").optional(),
  "custom_end_date": z.string().describe("自定义周期结束日期，精确到分钟，yyyy-MM-dd HH:mm").optional(),
  "quota_dimension": z.string().describe("额度维度\t单笔上限：ONCE\t日：DAY\t月：MONTH\t季度：QUARTER\t年：YEAR\t终身：LIFETIME\t一次性使用额度：ONLYONE").optional(),
  "quota_total": z.string().describe("协议额度").optional()
}