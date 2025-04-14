import { z } from "zod"

export const inputParams = {
  "bbb": z.string().describe("activity_id 词条描述"),
  "aaa": z.string().describe("1").optional(),
  "aaa_open_id": z.string().describe("1").optional(),
  "tesst": z.array(z.object({ "auth_status": z.boolean().describe("授权状态").optional(), "create_time": z.string().describe("任务创建时间").optional(), "end_time": z.string().describe("任务结束时间").optional(), "final_time": z.string().describe("任务到达终态的时间").optional(), "finish_periods": z.number().int().describe("任务完成期数").optional(), "merchant_id": z.string().describe("芝麻侧的商户id").optional(), "merchant_logo": z.string().describe("商户logo").optional(), "merchant_name": z.string().describe("商户名称").optional(), "out_biz_no": z.string().describe("生活记录加入时的外部业务号").optional(), "period_type": z.string().describe("周期类型").optional(), "promise_name": z.string().describe("生活记录模板名称").optional(), "record_id": z.string().describe("生活记录主记录id").optional(), "record_status": z.string().describe("主任务状态").optional(), "start_time": z.string().describe("任务开始时间").optional(), "sub_record_status": z.string().describe("子记录状态").optional(), "sub_title": z.string().describe("副标题").optional(), "template_id": z.string().describe("生活记录模板id").optional(), "total_periods": z.number().int().describe("任务总期数").optional() })).describe("stst").optional(),
  "xxx": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `xxx` to the tool, first call the tool `expandSchema` with \"/properties/xxx\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}