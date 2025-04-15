import { z } from "zod"

export const inputParams = {
  "delivery_id": z.string().describe("推广计划id"),
  "belong_merchant_info": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `belong_merchant_info` to the tool, first call the tool `expandSchema` with \"/properties/belong_merchant_info\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "delivery_config_list": z.array(z.object({ "activity_id": z.string().describe("活动id").optional(), "booth_code": z.string().describe("展位码:boothCode表达的是具体渠道所属的展位码。例如：支付结果页PAYMENT_RESULT").optional(), "channel": z.string().describe("可投放的渠道标识.").optional() })).describe("\"[已废弃] 待停止的投放配置列表。 最大数量限制20个。\"").optional(),
  "merchant_access_mode": z.string().describe("商户接入模式").optional(),
  "out_biz_no": z.string().describe("外部业务单号，用作幂等控制。 幂等作用： 再次请求返回与上一次相同的结果。 外部接入方需保证业务单号唯一。").optional()
}